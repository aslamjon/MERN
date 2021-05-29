class Tv {
    constructor(channel, volumeLevel, on) {
        this.channel = channel;
        this.volumeLevel = volumeLevel;
        this.on = on;
    }
    trun() {
        this.on = !this.on;
    }
    setChannel(newChannel) {
        if (this.on && newChannel <= 100) this.channel = newChannel;
    }
    setVolume(newVolume) {
        if (this.on && newVolume <= 10) this.volumeLevel = newVolume;
    }
    channelUp() {
        if (this.on && this.channel < 100) this.channel++;
    }
    channelDown() {
        if (this.on && this.channel > 0) this.channel--;
    }
    volumeUp() {
        if (this.on && this.volumeLevel < 10) this.volumeLevel++;
    }
    volumeDown() {
        if (this.on && this.volumeLevel > 0) this.volumeLevel--;
    }
}

const tv1 = new Tv(3, 5, true);
console.log(tv1);
// tv1.setChannel(46)
// tv1.channelUp();
// tv1.channelDown();
tv1.channelDown();
tv1.volumeUp();
tv1.trun();
console.log(tv1);
