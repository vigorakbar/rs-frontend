import React from 'react';

function AdminPostNewsPage(props) {
  const { ...rest } = props;
  return (
    <div>
      Teganya teganya teganya
      { ...rest }
    </div>
  );
}

export default AdminPostNewsPage;
