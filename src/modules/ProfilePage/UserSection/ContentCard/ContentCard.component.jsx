import React from "react";
import moment from "moment";
import Button from '@atlaskit/button';
import './ContentCard.styles.scss';
import {ReactComponent as Trophy} from '../../../../assets/medalLogo.svg'
const ContentCard = ({ username, answers_count, posts_count, comments_count, tags_count, created_at, id }) => (
  <div className='content-card'>
    <div className='content-grid'>
      <div className='info-cell'>
        <div className='info'>
          <div className='details'>
            <h2>{username}  <Trophy style={{width:"50px",height:"50px"}}/></h2>
          </div>
          <div className='date'>
            <p>
              user created &nbsp;-&nbsp;
              {moment(created_at).fromNow(false)}
            </p>
          </div>
        </div>
      </div>
      <div className='stats-cell'>
        <div className='count-sec'>
          <div className='counts'>
            <button className='cells'>
              <div className='column-grid'>
                <div className='head fc-black-700'>
                  {answers_count}
                </div>
                <div className='foot fc-black-500'>Answers</div>
              </div>
            </button>
            <button className='cells'>
              <a className='column-grid' href={`/questions?user=${id}`}>
                <div className='head fc-black-700'>
                  {posts_count}
                </div>
                <div className='foot fc-black-500'>Questions</div>
              </a>
            </button>
            <button className='cells'>
              <div className='column-grid'>
                <div className='head fc-black-700'>
                  {comments_count}
                </div>
                <div className='foot fc-black-500'>Comments</div>
              </div>
            </button>
            <button className='cells'>
              <div className='column-grid'>
                <div className='head fc-black-700'>
                  {tags_count}
                </div>
                <div className='foot fc-black-500'>Tags</div>
              </div>
            </button>
            <button className='cells'>
              <div className='column-grid'>
                <div className='head fc-black-700'>
                  {1345}
                </div>
                <div className='foot fc-black-500'>Karma</div>
              </div>
            </button>
          </div>
        </div>
      </div>
      <div>
        <Button appearance="primary">GIVE KUDOS</Button>
      </div>
      
    </div>
  </div>
)

export default ContentCard;