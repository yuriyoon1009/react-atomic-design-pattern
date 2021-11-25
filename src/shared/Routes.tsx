import { Route, Switch, Redirect } from 'react-router-dom';

import CardList from 'pages/CardListPage/CardList';
import InputList from 'pages/InputListPage/InputList';

type TRoutesProps = {
  indexUrl?: string;
  pathname?: string;
};

function Routes(props: TRoutesProps): JSX.Element {
  const { pathname } = props;

  return (
    <div>
      <Switch>
        {<Redirect from="/" to="/card-list" exact />}
        {pathname?.indexOf('/index.html') === 0 && <Redirect to="/card-list" />}
        <Route path="/card-list" component={CardList} exact />
        <Route path="/input-list" component={InputList} exact />
      </Switch>
    </div>
  );
}

export default Routes;
