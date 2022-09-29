import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';

import {ReactComponent as QuoteLogo} from '../../../assets/Quote.svg';
import {ReactComponent as VoteLogo} from '../../../assets/Vote.svg';
import {ReactComponent as TagsLogo} from '../../../assets/Tags.svg';
import {ReactComponent as TrophyLogo} from '../../../assets/Trophy.svg';

import './Caption.styles.scss';

const Caption = () => {
  return (
    <Fragment>
      <div className='caption fc-black-600'>
        <h3>Join the <b>HelpAssian</b> community</h3>
        <div className='caption-item'>
          <div className='grid-icon'>
            <QuoteLogo/>
          </div>
          <div className='grid-cell'>Get unstuck — ask a question</div>
        </div>
        <div className='caption-item'>
          <div className='grid-icon'>
            <TrophyLogo/>
          </div>
          <div className='grid-cell'>Earn kudos, karma, reputation, badges and many more</div>
        </div>
        <div className='caption-item'>
          <div className='grid-icon'>
            <VoteLogo/>
          </div>
          <div className='grid--cell'>
            Unlock new privileges like voting and commenting
          </div>
        </div>
        <div className='caption-item'>
          <div className='grid-icon'>
            <TagsLogo/>
          </div>
          <div className='grid-cell'>
            Save your favorite tags, filters, and jobs
          </div>
        </div>
        <div className='caption-item fc-black-600'>
          <div>
            <i>Use the power of <strong>"HelpAssian"</strong> and ease your life.</i>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Caption;
