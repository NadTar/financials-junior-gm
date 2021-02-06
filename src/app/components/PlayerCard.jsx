import { motion } from 'framer-motion';
import { useDispatch } from 'react-redux';
import { toggleOverlay } from '../redux/actions';
import '@css/components/PlayerCard.css';

export const PlayerCard = ({
  player,
  tutorialActive,
  highlight,
  inOverlay,
}) => {
  const dispatch = useDispatch();

  const openOverlay = () => {
    dispatch(
      toggleOverlay({
        isOpen: true,
        template: overlayTemplate,
      })
    );
  };

  const inner = player ? (
    <div>
      <p className='position-text'>Position</p>
      <div
        className={`box-shadow player-card-inner${
          player ? ' border-primary' : ' border-accent'
        }`}
        onClick={openOverlay.bind(this)}
      >
        <div className='player-card-header'>
          <div className='player-rank'>
            <span>80</span>
          </div>
          <div className='player-cost'>
            <span>$2</span>
          </div>
        </div>
        <div className='player-card-body'>
          <div className='player-card-img'></div>
          <div className='player-scores'>
            <div className='player-score player-score-off'>80</div>
            <div className='player-score player-score-pass'>80</div>
            <div className='player-score player-score-def'>80</div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div>
      <p className='position-text'>Position</p>
      <div
        className={`box-shadow player-card-inner${
          player ? ' border-primary' : ' border-accent'
        }${highlight ? ' border-highlight' : ''}`}
        onClick={openOverlay.bind(this)}
      >
        <p className='add-player-text color-primary outline-accent'>
          Add Player
        </p>
      </div>
    </div>
  );

  const overlayTemplate = (
    <div className='player-overlay-container'>
      <div className='player-card-wrap player-card-large'>{inner}</div>
      <div className='player-overlay-buttons-wrap'>
        <button className='player-overlay-button outline-black box-shadow'>
          Trade
        </button>
        <button className='player-overlay-button outline-black box-shadow'>
          Release
        </button>
      </div>
    </div>
  );

  const mainTemplate = tutorialActive ? (
    <motion.div
      className={`player-card-wrap${highlight ? ' highlighted' : ''}`}
    >
      {inner}
    </motion.div>
  ) : (
    <div className={`player-card-wrap${highlight ? ' highlighted' : ''}`}>
      {inner}
    </div>
  );

  return inOverlay ? overlayTemplate : mainTemplate;
};
