import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import './landing.css';

export function Landing() {
  // const folderId = props.match.params.folderId;
  // console.log(folderId);
    const folders = (
      <div>
        <li className="landing-menu-list-item">
            <Link to={`/homepage`}>Search for your next trail</Link>
        </li>
      </div>
    );

    return (
        <div className="sidebar sidebar-left landing-all">
            <nav className="landing-menu">
                <ul className="landing-menu-list">
                    {folders}
                </ul>
            </nav>
            <div className="accordian">
				<ul>
					<li>
						<div className="image_title">
							<a >Find</a>
						</div>
						<a >
							{/* <img src="http://thecodeplayer.com/uploads/media/3yiC6Yq.jpg"/>                 */}
							<img src="https://adventurejunkies-theadventurejunk.netdna-ssl.com/wp-content/uploads/hiking-1.jpg" 
							alt='Outdoor mountain one' width='650' height='325' />
						</a>
					</li>
					<li>
						<div className="image_title">
							<a >Your</a>
						</div>
						<a >
							<img src="https://cdn.kimkim.com/files/a/content_articles/featured_photos/7a1e35ce237d78064a73e43f31c2d36897903ef3/big-7cb3c41e0671f4e79a3f9bae97d3490d.jpg" 
							alt='Outdoor mountain two' width='650' height='325' />
						</a>
					</li>
					<li>
						<div className="image_title">
							<a >Next</a>
						</div>
						<a >
							<img src="https://upload.wikimedia.org/wikipedia/commons/5/55/Hiking_in_the_Talkeetna_Mountains_of_Alaska.JPG" 
							alt='Outdoor mountain three' width='650' height='325' />
						</a>
					</li>
					<li>
						<div className="image_title">
							<a >Adventure...</a>
						</div>
						<a >
							<img src="http://yegfitness.ca/wp-content/uploads/2017/07/hiking.jpg" 
							alt='Outdoor mountain four' width='650' height='325' />
						</a>
					</li>
					{/* <li>
						<div class="image_title">
							<a href="#">Cars 2</a>
						</div>
						<a href="#">
							<img src="http://thecodeplayer.com/uploads/media/8k3N3EL.jpg"/>
						</a>
					</li> */}
				</ul>
			</div>
        </div>
    );
}

const mapStateToProps = state => ({
    folderList: Object.keys(state).map(folderId => state[folderId])
});

export default connect(mapStateToProps)(Landing);
