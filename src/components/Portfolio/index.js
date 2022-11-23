import React, { useState } from 'react';
import ProjectList from '../ProjectList';
import Toolbar from '../Toolbar';

function Portfolio({ projectList }) {
  const filterButtonList = ["All", "Websites", "Flayers", "Business Cards"];

  const [filteredListProjects, setFilteredListProjects] = useState(projectList);
  const [selected, setSelected] = useState('All');

  const filter = (e) => {
    const buttons = document.querySelectorAll('button');
    buttons.forEach((item) => item.classList.remove('selected'));

    e.target.classList.add('selected');

    const select = e.target.textContent;

    if (select === 'All') {
      setFilteredListProjects(projectList);
    } else {
      setFilteredListProjects(
        projectList.filter(item => item.category === select)
      );
    }

    setSelected(select);
  }

  return (
    <div className='container'>
      <Toolbar
        filters={filterButtonList}
        selected={selected}
        onSelectFilter={filter}
      />

      <div className='list'>
        <ProjectList projects={filteredListProjects} />
      </div>
    </div>
  );
}

export default Portfolio;
