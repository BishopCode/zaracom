import useBreadcrumbs from 'use-react-router-breadcrumbs';
import './breadCrumb.scss';

const BreadCrumb = () => {
  const breadcrumbs = useBreadcrumbs();

  return (
    <div className="bread-crumb">
      {breadcrumbs.map(({ breadcrumb }) => breadcrumb)}
    </div>
  );
};

export default BreadCrumb;
