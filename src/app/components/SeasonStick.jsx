import React from 'react';
import icon from '@images/icons/season-hockey-stick.svg';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import '@css/components/stick-btn.css';
import { ReactSVG } from 'react-svg';

export const SeasonStick = ({ tutorialActive, includeSubtext }) => {
  const animationState = useSelector(
    (state) => state.tutorials.home.seasonStick
  );

  const card = (
    <div className={`stick-btn-inner${includeSubtext ? ' has-sub-text' : ''}`}>
      <ReactSVG className='stick-btn-img' src={icon} />
      <div className='stick-btn-title-wrap'>
        <h2 className='stick-btn-title'>Season</h2>
      </div>
      <p className='stick-btn-text'>Play matches and win the championship!</p>
    </div>
  );
  return tutorialActive ? (
    <motion.div
      className='hidden stick-btn-wrap'
      animate={animationState}
      transition={{ default: { duration: 1 } }}
    >
      {card}
    </motion.div>
  ) : (
    <div className='stick-btn-wrap'>{card}</div>
  );
};