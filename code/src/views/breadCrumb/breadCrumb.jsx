import React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import useBreadcrumbs from 'use-react-router-breadcrumbs';
import { Link } from 'react-router-dom';
import './breadCrumb.scss';

const routes = [{ path: '/details/:id', breadcrumb: 'Detalle' }];

const Breadcrumb = () => {
  const breadcrumbs = useBreadcrumbs(routes, { disableDefaults: true });

  return (
    <div className="bread-crumb">
      <Breadcrumbs separator="›" aria-label="breadcrumb">
        <Link to="/">Home</Link>
        {breadcrumbs.map(({ match, breadcrumb }, index) => (
          <Link key={index} to={match.pathname}>
            {breadcrumb}
          </Link>
        ))}
      </Breadcrumbs>
    </div>
  );
};

export default Breadcrumb;
