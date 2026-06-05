import { Helmet } from 'react-helmet-async';

const PageTitle = ({ title }) => {
  return (
    <Helmet>
      <title>{title ? `${title} | Prime Panel` : 'Prime Panel'}</title>
    </Helmet>
  );
};

export default PageTitle;
