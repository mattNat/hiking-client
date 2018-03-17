import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import './sidebar.css';

export function Sidebar() {
  // const folderId = props.match.params.folderId;
  // console.log(folderId);
    const folders = (
      <div>
        <li className="folder-menu-list-item">
            <Link to={`/`}>Home</Link>
        </li>
        <li className="folder-menu-list-item">
          <Link to={`/posts/new`}>Saved Trails</Link>
        </li>
      </div>
    );

    return (
        <div className="sidebar sidebar-left">
            <nav className="folder-menu">
                <ul className="folder-menu-list">
                    {folders}
                </ul>
            </nav>
        </div>
    );
}

const mapStateToProps = state => ({
    folderList: Object.keys(state).map(folderId => state[folderId])
});

export default connect(mapStateToProps)(Sidebar);
