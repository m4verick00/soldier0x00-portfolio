/**
 * AudioManager.js - Centralized audio system for cyberpunk experience
 * Handles typing sounds, ambient audio, and professional mode toggle
 */

class AudioManager {
  constructor() {
    this.audioContext = null;
    this.isEnabled = true;
    this.isProfessionalMode = false;
    this.sounds = {};
    this.masterVolume = 0.3;
    this.ambientLoop = null;
    
    // Initialize audio context on first user interaction
    this.initPromise = null;
    this.isInitialized = false;
  }

  async init() {
    if (this.initPromise) return this.initPromise;
    
    this.initPromise = this._initAudio();
    return this.initPromise;
  }

  async _initAudio() {
    try {
      // Create audio context
      this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
      
      // Load sound effects
      await this.loadSounds();
      
      // Set up ambient audio
      this.setupAmbientAudio();
      
      this.isInitialized = true;
      console.log('🎵 Audio system initialized');
    } catch (error) {
      console.warn('Audio initialization failed:', error);
      this.isEnabled = false;
    }
  }

  async loadSounds() {
    const soundFiles = {
      keypress: this.generateKeypressSound(),
      boot: this.generateBootSound(),
      notification: this.generateNotificationSound(),
      glitch: this.generateGlitchSound(),
      ambient: this.generateAmbientSound()
    };

    for (const [name, audioBuffer] of Object.entries(soundFiles)) {
      this.sounds[name] = audioBuffer;
    }
  }

  // Generate realistic keyboard typing sound
  generateKeypressSound() {
    const duration = 0.1;
    const sampleRate = this.audioContext?.sampleRate || 44100;
    const buffer = this.audioContext?.createBuffer(1, duration * sampleRate, sampleRate);
    const data = buffer?.getChannelData(0);

    if (data) {
      for (let i = 0; i < data.length; i++) {
        const noise = (Math.random() - 0.5) * 2;
        const envelope = Math.exp(-i / (sampleRate * 0.05));
        data[i] = noise * envelope * 0.1;
      }
    }

    return buffer;
  }

  // Generate cyberpunk boot sound
  generateBootSound() {
    const duration = 2;
    const sampleRate = this.audioContext?.sampleRate || 44100;
    const buffer = this.audioContext?.createBuffer(1, duration * sampleRate, sampleRate);
    const data = buffer?.getChannelData(0);

    if (data) {
      for (let i = 0; i < data.length; i++) {
        const t = i / sampleRate;
        const freq = 150 + t * 50;
        const wave = Math.sin(2 * Math.PI * freq * t) * Math.exp(-t * 2);
        data[i] = wave * 0.2;
      }
    }

    return buffer;
  }

  // Generate notification beep
  generateNotificationSound() {
    const duration = 0.3;
    const sampleRate = this.audioContext?.sampleRate || 44100;
    const buffer = this.audioContext?.createBuffer(1, duration * sampleRate, sampleRate);
    const data = buffer?.getChannelData(0);

    if (data) {
      for (let i = 0; i < data.length; i++) {
        const t = i / sampleRate;
        const wave = Math.sin(2 * Math.PI * 800 * t) * Math.exp(-t * 10);
        data[i] = wave * 0.15;
      }
    }

    return buffer;
  }

  // Generate glitch effect sound
  generateGlitchSound() {
    const duration = 0.2;
    const sampleRate = this.audioContext?.sampleRate || 44100;
    const buffer = this.audioContext?.createBuffer(1, duration * sampleRate, sampleRate);
    const data = buffer?.getChannelData(0);

    if (data) {
      for (let i = 0; i < data.length; i++) {
        const noise = (Math.random() - 0.5) * 2;
        const envelope = Math.sin((i / data.length) * Math.PI);
        data[i] = noise * envelope * 0.1;
      }
    }

    return buffer;
  }

  // Generate ambient cyberpunk sound
  generateAmbientSound() {
    const duration = 10; // Loop every 10 seconds
    const sampleRate = this.audioContext?.sampleRate || 44100;
    const buffer = this.audioContext?.createBuffer(1, duration * sampleRate, sampleRate);
    const data = buffer?.getChannelData(0);

    if (data) {
      for (let i = 0; i < data.length; i++) {
        const t = i / sampleRate;
        const wave1 = Math.sin(2 * Math.PI * 60 * t) * 0.1;
        const wave2 = Math.sin(2 * Math.PI * 80 * t) * 0.05;
        const noise = (Math.random() - 0.5) * 0.02;
        data[i] = wave1 + wave2 + noise;
      }
    }

    return buffer;
  }

  setupAmbientAudio() {
    if (!this.isEnabled || this.isProfessionalMode || !this.audioContext) return;

    const source = this.audioContext.createBufferSource();
    const gainNode = this.audioContext.createGain();
    
    source.buffer = this.sounds.ambient;
    source.loop = true;
    
    gainNode.gain.value = this.masterVolume * 0.3;
    
    source.connect(gainNode);
    gainNode.connect(this.audioContext.destination);
    
    this.ambientLoop = source;
    source.start();
  }

  async playSound(soundName, volume = 1) {
    if (!this.isEnabled || this.isProfessionalMode || !this.isInitialized) return;

    await this.init();

    if (!this.sounds[soundName] || !this.audioContext) return;

    try {
      const source = this.audioContext.createBufferSource();
      const gainNode = this.audioContext.createGain();
      
      source.buffer = this.sounds[soundName];
      gainNode.gain.value = this.masterVolume * volume;
      
      source.connect(gainNode);
      gainNode.connect(this.audioContext.destination);
      
      source.start();
    } catch (error) {
      console.warn('Failed to play sound:', error);
    }
  }

  playKeypress() {
    this.playSound('keypress', 0.3);
  }

  playBootSound() {
    this.playSound('boot', 0.8);
  }

  playNotification() {
    this.playSound('notification', 0.5);
  }

  playGlitch() {
    this.playSound('glitch', 0.4);
  }

  toggleProfessionalMode() {
    this.isProfessionalMode = !this.isProfessionalMode;
    
    if (this.isProfessionalMode && this.ambientLoop) {
      this.ambientLoop.stop();
      this.ambientLoop = null;
    } else if (!this.isProfessionalMode) {
      this.setupAmbientAudio();
    }

    // Dispatch event for UI updates
    window.dispatchEvent(new CustomEvent('audioModeChanged', {
      detail: { professionalMode: this.isProfessionalMode }
    }));

    return this.isProfessionalMode;
  }

  setVolume(volume) {
    this.masterVolume = Math.max(0, Math.min(1, volume));
  }

  enable() {
    this.isEnabled = true;
    if (!this.isProfessionalMode) {
      this.setupAmbientAudio();
    }
  }

  disable() {
    this.isEnabled = false;
    if (this.ambientLoop) {
      this.ambientLoop.stop();
      this.ambientLoop = null;
    }
  }
}

// Create singleton instance
export const audioManager = new AudioManager();

// Auto-initialize on first user interaction
const initOnInteraction = async () => {
  await audioManager.init();
  document.removeEventListener('click', initOnInteraction);
  document.removeEventListener('keydown', initOnInteraction);
  document.removeEventListener('touchstart', initOnInteraction);
};

document.addEventListener('click', initOnInteraction, { once: true });
document.addEventListener('keydown', initOnInteraction, { once: true });
document.addEventListener('touchstart', initOnInteraction, { once: true });

export default AudioManager;