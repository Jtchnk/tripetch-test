import { useEffect, useRef, useState } from 'react';
import './App.css';

const dataAthlets = [
  {
    header: 'CONNECTION',
    description:
      'Connect with coaches directly, you can ping coaches to view profile.',
  },
  {
    header: 'COLLABORATION',
    description:
      'Work with other student athletes to increase visability. When you share and like other players videos it will increase your visability as a player. This is the team work aspect to Surface 1.',
  },
  {
    header: 'GROWTH',
    description:
      'Resources and tools for you to get better as a student Athelte. Access to training classes, tutor sessions, etc',
  },
];
const dataPlayers = [
  {
    header: 'CONNECTION',
    description:
      'Connect with talented athlete directly, you can watch their skills through video showreels directly from Surface 1.',
  },
  {
    header: 'COLLABORATION',
    description:
      'Work with recruiter to increase your chances of findingtalented athlete.',
  },
  {
    header: 'GROWTH',
    description: 'Save your time, recruit proper athlets for your team.',
  },
];

function App() {
  const [activeIndexAth, setActiveIndexAth] = useState(0);
  const [activeIndexPly, setActiveIndexPly] = useState(0);
  const touchStartXAth = useRef(null);
  const touchStartXPly = useRef(null);

  const handleTouchStartAth = (event) => {
    touchStartXAth.current = event.touches[0].clientX;
  };
  const handleTouchStartPly = (event) => {
    touchStartXPly.current = event.touches[0].clientX;
  };

  const handleTouchEndAth = (event) => {
    const touchEndXAth = event.changedTouches[0].clientX;
    const touchDistanceAth = touchEndXAth - touchStartXAth.current;
    if (touchDistanceAth > 20) {
      prevSlideAth();
    } else if (touchDistanceAth < -20) {
      nextSlideAth();
    }
  };

  const handleTouchEndPly = (event) => {
    const touchEndXPly = event.changedTouches[0].clientX;
    const touchDistancePly = touchEndXPly - touchStartXPly.current;
    if (touchDistancePly > 20) {
      prevSlidePly();
    } else if (touchDistancePly < -20) {
      nextSlidePly();
    }
  };

  // useEffect(() => {
  //   if (activeIndexAth > 2) {
  //     setActiveIndexAth(2);
  //   } else if (activeIndexAth < 0) {
  //     setActiveIndexAth(0);
  //   }
  // }, [activeIndexAth]);

  useEffect(() => {
    if (activeIndexAth > 2) {
      setActiveIndexAth(2);
    } else if (activeIndexAth < 0) {
      setActiveIndexAth(0);
    }
    if (activeIndexPly > 2) {
      setActiveIndexPly(2);
    } else if (activeIndexPly < 0) {
      setActiveIndexPly(0);
    }
  }, [activeIndexAth, activeIndexPly]);


  const nextSlideAth = () => {
    setActiveIndexAth((prevIndex) => prevIndex + 1);
  };

  const prevSlideAth = () => {
    setActiveIndexAth((prevIndex) => prevIndex - 1);
  };

  const nextSlidePly = () => {
    setActiveIndexPly((prevIndex) => prevIndex + 1);
  };

  const prevSlidePly = () => {
    setActiveIndexPly((prevIndex) => prevIndex - 1);
  };
  return (
    <div className='App'>
      <img
        src='/images/footballer.png'
        alt='football'
        className='image football'
      />
      <img
        src='/images/football-tablet.png'
        alt='football'
        className='image football-tablet'
      />
      <img
        src='/images/football-mobile.png'
        alt='football'
        className='image football-mobile'
      />
      <div className='bg-ath-1'>
        <div className='container-ath'>
          <div className='header header-ath'>ATHLETS</div>
          <div className='flex no-mobile'>
            <div className='number-group'>
              <div className='number'>01</div>
              <div className='rectangle'></div>
            </div>
            <div className='sub-header'>CONNECTION</div>
          </div>
          <div className='description ath-1'>
            Connect with coaches directly, you can ping coaches to view profile.
          </div>
        </div>
      </div>
      <div className='bg-ath-2'>
        <div className='container-ath'>
          <div className='default-showing'>
            <div className='flex ath-2'>
              <div className='number-group'>
                <div className='number'>02</div>
                <div className='rectangle'></div>
              </div>
              <div className='sub-header'>COLLABORATION</div>
            </div>
            <div className='description'>
              Work with other student athletes to increase visability. When you
              share and like other players videos it will increase your
              visability as a player. This is the team work aspect to Surface 1.
            </div>
          </div>
          <div className='mobile'>
            <div className='swipe-view'>
              {dataAthlets.map((item, index) => {
                return (
                  <section
                    className={`swipe-ath `}
                    key={index}
                    onTouchStart={handleTouchStartAth}
                    onTouchEnd={handleTouchEndAth}
                  >
                    <div className='flex ath-2'>
                      <div className='number-group'>
                        <div className='number'>0{index + 1}</div>
                        <div className='rectangle'></div>
                      </div>
                      <div className='sub-header'>{item.header}</div>
                    </div>
                    <div className='description'>{item.description}</div>
                  </section>
                );
              })}
            </div>
            <div className='flex-dot'>
              {dataAthlets.map((item, index) => (
                <div
                  key={index}
                  className={`dot ${index === activeIndexAth ? 'active' : ''}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className='bg-ath-3'>
        <div className='container-ath'>
          <div className='flex ath-3'>
            <div className='number-group'>
              <div className='number'>03</div>
              <div className='rectangle-3'></div>
            </div>
            <div className='sub-header'>GROWTH</div>
          </div>
          <div className='description ply-3'>
            Resources and tools for you to get better as a student Athelte.
            Access to training classes, tutor sessions, etc 
          </div>
        </div>
      </div>
      <div className='image basketball'>
        <img src='/images/basketball.png' />
      </div>
      <div className='image basketball-tablet'>
        <img src='/images/basketball-tablet.png' />
      </div>
      <img
        src='/images/basketball-mobile.png'
        alt='basketball'
        className='image basketball-mobile'
      />
      <div className='bg-ply-1'>
        <div className='container-ply'>
          <div className='header header-ply'>PLAYERS</div>
          <div className='flex no-mobile'>
            <div className='number-group'>
              <div className='number'>01</div>
              <div className='rectangle'></div>
            </div>
            <div className='sub-header'>CONNECTION</div>
          </div>
          <div className='description ply-1'>
            Connect with talented athlete directly, you can watch their skills
            through video showreels directly from Surface 1.
          </div>
        </div>
      </div>
      <div className='bg-ply-2'>
        <div className='container-ply'>
          <div className='default-showing'>
            <div className='flex ply-2'>
              <div className='number-group'>
                <div className='number'>02</div>
                <div className='rectangle'></div>
              </div>
              <div className='sub-header'>COLLABORATION</div>
            </div>
            <div className='description ply-2'>
              Work with recruiter to increase your chances of finding talented
              athlete.
            </div>
          </div>
          <div className='mobile'>
            <div className='swipe-view'>
              {dataPlayers.map((item, index) => {
                return (
                  <section
                    className='swipe-ply'
                    key={index}
                    onTouchStart={handleTouchStartPly}
                    onTouchEnd={handleTouchEndPly}
                  >
                    <div className='flex ply-2'>
                      <div className='number-group'>
                        <div className='number'>0{index + 1}</div>
                        <div className='rectangle'></div>
                      </div>
                      <div className='sub-header'>{item.header}</div>
                    </div>
                    <div className='description ply-2'>{item.description}</div>
                  </section>
                );
              })}
            </div>
            <div className='flex-dot'>
              {dataPlayers.map((item, index) => (
                <div
                  key={index}
                  className={`dot ${index === activeIndexPly ? 'active' : ''}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className='bg-ply-3'>
        <div className='container-ply'>
          <div className='flex ply-3'>
            <div className='number-group'>
              <div className='number-ply-3'>03</div>
              <div className='rectangle-3'></div>
            </div>
            <div className='sub-header'>GROWTH</div>
          </div>
          <div className='description ply-3'>
            Save your time, recruit proper athlets for your team.
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
