import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

export function Landing() {
  // const folderId = props.match.params.folderId;
  // console.log(folderId);
    const folders = (
      <div>
        <li className="landing-menu-list-item">
            <Link to={`/homepage`}>Home</Link>
        </li>
      </div>
    );

    return (
        <div className="sidebar sidebar-left">
            <nav className="landing-menu">
                <ul className="landing-menu-list">
                    {folders}
                </ul>
            </nav>
        </div>
    );
}

const mapStateToProps = state => ({
    folderList: Object.keys(state).map(folderId => state[folderId])
});

export default connect(mapStateToProps)(Landing);
