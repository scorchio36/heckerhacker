import React, {Component} from 'react';
import Definition from './Definition';
import getVocabSection from './VocabHelper'; // function used to generate Vocab section
const DATA_MUSIC_PROD = require('./DATA_MUSIC_PROD.json');


class MusicProd extends Component {

  constructor(props) {
    super(props);


    /* definitionComponents stores the Definition Components passed from VocabHelper.
       The components are already formatted and placed into an array during the call to
      the helper. All that is needed is to place this returned component list into an
      unordered list element. Since a Vocab section will appear in every info page, this
      info page format will need to be generalized at some point.*/
    this.state = {
      definitionComponents: getVocabSection(DATA_MUSIC_PROD)
    };


  }

  render() {

    return (

      <div>
        <h1>Resources/Notes for Music Production</h1> <hr/>
        <div>
          <div>
            <h2>Vocab</h2>
            <ul>
              {this.state.definitionComponents}
            </ul><hr/>
          </div>
          <div>
            <h2>Notes</h2>
            <ul>
              <li>
                <h3>Sidechaining: LFO v.s. Compressor</h3>
                <ul>
                  <li>In many instances, you can use an LFO/LFO tool for sidechaining or pumping effects. Deadmau5 actually recommends using an LFO in most cases.</li>
                  <li>Your goal for pumping or sidechaining is to attenuate the sidechained signal right where the kick hits its greatest peak (You want that kick or snare to cut through as effectively as possible).</li>
                  <li>Electronic drums are (almost always) sampled. Therefore, you will be playing the same sound over and over again throughout the song. If that's the case, you know the drum peak will be in the same spot every time, since the sample and its peaks do not change. So you can use a predictable LFO and adjust it so you get perfect pumping everytime.</li>
                  <li>Now when would you use a compressor for sidechaining/pumping? When you are using real drums or recording instruments.</li>
                  <li>Analog kicks or snares have different harmonics and overtones. Their highest peaks will vary on every different stroke. You won't ever be able to hit that drum exactly the same way twice. Since the peak will vary every time, you will want to use a peak detection compressor to effectively find the highest peak everytime and sidechain the signal at that exact point.</li>
                  <li>You wouldn't be able to do that with an LFO because the LFO will duck the instrument out at the same spot every time. Whereas an analog drum kick might peak at different times and therefore won't cut through as well.</li>
                </ul>
              </li>
              <li>
                <h3>VST Plugins that I Like to Use</h3>
                <ul>
                  <li><a href="https://www.voxengo.com/product/span/">SPAN - Spectrum Analyzer</a></li>
                  <li><a href="https://www.audiodamage.com/pages/free-downloads">Rough Rider Compressor</a></li>
                  <li><a href="https://www.tbproaudio.de/download">VUMeter - TBProAudio</a></li>
                  <li><a href="https://tytel.org/helm/">Helm - Matt Tytel</a></li>
                  <li><a href="https://www.meldaproduction.com/">MeldaProductions Suite of Tools</a></li>
                  <li><a href="http://bram.smartelectronix.com/plugins.php?id=4">s(M)exoscope by SmartElectronix</a></li>
                </ul>
              </li>
              <li>
                <h3>Metering</h3>
                <ul>
                  <li>Metering is a very important part of mixing. This just refers to the measurement of the "loudness" or energy of signals in your mix. There are many types of metering systems and different units that you can use. The main ones that I've come across are:</li>
                  <li>dBFS - Stands for Decibels at Full Scale. In this system, 0dBFS is a reference point referring to the high amplitude that a system can produce. Above this amplitude, your signal will be clipped. This is just a specialized dB system with a reference. Much like dBm or dBw. The main units here are still dB. This is most useful as a tool to measure the height of your peaks. Before sending your track off to master, leave some headroom. Your peaks shouldn't exceed -6dB.</li>
                  <li>K-metering - System invented by Dan Katz. Uses a scale that adjusts different parts of the spectrum to accounts for varying frequencies having more energy than others. The number at the end of the K refers to the dB reference point of the scale. This is more useful as a measure of the total energy or loudness of your track.</li>
                  <li>LUFS - Stands for Loudness Units at Full Scale. Based on a standard developed by some European standards committee, known as LKFS. Eventually, became what is known as LUFS today. LUFS is a measure of the "loudness" of a track as well. It is a standard followed by most broadcasting and music companies today. I reccommend using this one when measuring the loudness of your track. Before sending your track off to master, leave some headroom. Your overall integrated loudness should be somewhere between -23dB and -18dB. LUFS first takes a certain length of sound and then gives you a value. There are different LUFS scales that sample the sounds for a different amount of time. For example, the LUFS-ML system samples 0.4 seconds of sound and then gives you a value in dB. LUFS-SL will take 3 seconds of sound. Integrated LUFS refers to the average loudness of your entire track. So after your entire track has been sampled by the meter, you will get a final LUFS value. That integrated value is the one that should be between -23dB and -18dB.</li>
                  <li>RMS - Stands for Root Mean Square. With root mean square, you sample your waveform, square each sample, add them all together, divide that sum by the number of samples, then take the square root of that. Essentially, RMS is the square root of the average of the squares of your waveform. This is done because waveforms are oscillatory. If you try and average a waveform without squaring it, the positive and negative portions of the waveform will mathematically cancel each other out and give you a crappy idea of the actual energy/loudness content of the sound. RMS is also a good way to quickly get an idea of the loudness of your track. It is inferior to something like K-metering or LUFS, however, as RMS doesn't properly account for the variation in power that occurs as you go up and down the spectrum.</li>
                  <li><a href="https://www.youtube.com/watch?v=jeBjyHm5LKc&ab_channel=AudioProductionTips">Digital Metering 101 - dBFS, RMS, LUFS and more</a></li>
                  <li><a href="https://www.soundonsound.com/forum/viewtopic.php?f=16&t=60269">Interesting Thread on Peak-Normalization vs Loudness-Normalization</a></li>
                  <li><a href="https://www.whippedcreamsounds.com/how-loud-should-my-mix-be/">How LOUD should my mix be?</a></li>
                  <li><a href="https://www.meterplugs.com/blog/2016/10/14/k-system-metering-101.html">K-Metering System 101</a></li>
                  <li><a href="https://unlockyoursound.com/spotify-lufs/">Interesting Article on Spotify LUFS and what LUFS level to release your song at</a></li>
                </ul>
              </li>

              <li>
                <h3>Mixing</h3>
                <ul>
                  <li>
                    Equalization is an important part of mixing. You can use it to cut out bad sounds, bring out good sounds, or change the sound of an instrument. See 'equalizers' in the definitions section for more details. However, the most important thing an EQ can do during mixing, is create space for everything. You only have about 20kHz of bandwidth for your entire song. It's really even less than this, since human hearing starts dropping off as we get older and higher frequencies kind of start meshing together between 15k-20k. You should allocate certain portions of the spectrum to certain instruments and cut out those allocated sections out of other instruments within the song. For example, let's say you have a low-end kick who's energy sits between 60Hz and 350Hz. Then let's say you have a trumpet sample that has strong energy between 150Hz and 8kHz. You probably want to give that kick it's space by cutting out the portion of the trumpet sound that overlaps with the kick's frequency content. You also want to give your important instruments or tracks the space they deserve. That way they get the most attention. This is a must for your vocals, for example. If I have a primary vocal who's fundamental is sitting around 400-600Hz then I should make cuts, even small ones, in all other instruments at 400-600Hz. That way the vocal isn't competing for that portion of the frequency spectrum.
                  </li>
                  <li>
                    Compression is another must when it comes to mixing. It is used to control your dynamics and change the feel or thickness of your tracks.
                  </li>
                  <li>
                    Reverb and Delay can bring a more authentic feeling to your mix. 
                  </li>
                  <li>
                    Make sure you leave headroom in your final mix for mastering. Standard is to not let your peaks exceed -6dBFS. I have found it may be easier to mix at a lower level than this though. You can mix between -18dBFS to -12dBFS with confidence that you won't ever break that -6dBFS ceiling. When you're happy with your mix, if you aren't peaking at -6dBFS you can just move all of your tracks up until you are peaking there.
                  </li>
                </ul>
              </li>

            </ul>
          </div>
        </div>
      </div>

    );
  }


}




export default MusicProd;
