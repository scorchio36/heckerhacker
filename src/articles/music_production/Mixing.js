import React, {Component} from 'react';

class Mixing extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (

      <div>
        <h1>My Steps for Mixing</h1>
        <img src="https://www.practical-music-production.com/wp-content/uploads/2019/03/mixing-board-feature.jpg" width="1000vw" height="500px"/>
        <p> A musical production of any kind is a collection of various sounds and effects that are overlayed in complex ways. All of these components within
            a production need to be organized and managed properly so that they all fit together and sound nice once they hit the speakers. The process of
            controlling the levels, timing, spectrum, and stereolocation of all of these elements so that they fit together cohesively and sound nice to your
            ears is called mixing. Please note that, although a large portion of the mixing process is technical, there is also a considerable amount of room
            for creativity. Technical, as well as creative, decisions are what will set your mix and song apart from others and hopefully lead to a great sounding
            and unique musical production.
        </p>
        <p> The mixing process in this article is derived from mixing steps put forward by an audio engineer named Rob Williams. He put together a fantastic 'checklist'
            of items that you need to consider while you are mixing. He calls them the <a href="http://prosoundformula.com/the-5-drivers-of-mixing/">5 Drivers
            of Mixing</a>. Mixing in and of itself can be very daunting. Especially for beginners. There are just so many technical steps that must be taken to make your
            mix sound good, but also a lot of creative choices and tools available to you. On top of that, everyone has their own opinions. As you learn more
            about mixing, you'll come to find that everyone does certain things in their own way. They all have their own opinions about how things should be done. And
            this is okay! As you practice, you will come to develop your own streamlined process and own opinions on how a mix should be done. Everyone does what works
            best for them. There is nothing wrong with this. It just makes it that much more difficult for beginners to find their way. On top of all the technical things
            you need to learn, each new video and engineer you talk to will pull you in a different direction with regards to what mixing decisions you should make.
        </p>
        <p>
          Rob Williams' 5 Drivers of Mixing, in my opinion, is a great set of steps to follow in order to combat this overwhelming overflow of decisions that hits
          you during the mixing process. I definitely recommend checking out his material through the link above. He has a set of videos and an easy-to-read manual
          that discusses his mixing process. In my opinion, the hardest part of mixing is knowing when to stop. I found that Rob's methodologies helped me focus
          on what needs to be done in the mix and when to decide that I'm finished.
        </p>
        <p>
          I know it sounds like the dude paid me to write all this stuff, but he really didn't. His process just works great and I wanted to touch on it, because
          that is how this article will be organized. I will split my mixing steps into the 5 drivers of mixing. And the whole point of this article is really just
          to expand on what Rob Williams had. As I learn more about mixing, I find little details here and there on how to make mixes sound even better. I will update
          this article as I learn new things and drop those new things in as subtopics under each of Rob's 5 Drivers. I ultimately will just use this article as a
          quick reference, but please feel free to read through it and take whatever you find useful.
        </p>

        <h2> Step 1: Balance </h2><img src="https://media.istockphoto.com/photos/surreal-image-of-an-elephant-balancing-on-a-beach-ball-picture-id858259828?k=20&m=858259828&s=612x612&w=0&h=BoMiXsV5q4KdVxi1T1nYFVCjqBbTRt1xAj7zSyKyXYY="/>

        <p>
          Before you start mixing, make sure you've gone through and done your best to gain stage. Put your tracks in that 'analog sweet spot' so they can sound
          as good as possible as they go into their respective effects chains. Check out <a href="https://www.youtube.com/watch?v=Tq5lDHCKt84&ab_channel=MusicianonaMission">this video</a> for more information.

        </p>
        <p>
          Balance refers to using the faders on your mixing panel to adjust the sound levels of your tracks. You need to consider how loud each of your sounds are
          with respect to your allowed decibel ceiling as well as how loud they are with respect to each other. The computer is not capable of producing sounds
          louder than 0dBFS, so that's definitely a level you should consider. Beyond this level your tracks will begin to clip. A lot of the time clipping will
          just introduce gross distortion into your sound, but there are cases where you can use distortion artistically.
        </p>
        <p>
          Additionally, a lot of people will mix to a lower dBFS level than 0 so they have headroom going into mastering. I will mix to around -6dBFS.
        </p>
        <div>
        <ol>
          <li>
            Balance
          </li>
          <li>
            Fix
          </li>
          <li>
            Enhance
          </li>
          <li>
            Shape
          </li>
          <li>
            Space
          </li>
        </ol>
        </div>
      </div>
    );
  }
}

export default Mixing;
