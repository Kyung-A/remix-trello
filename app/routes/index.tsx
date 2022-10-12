import Card from './components/Card';
import List from './components/List';

export default function Index() {
  return (
    <div className="box-border w-full h-auto p-5">
      <div className="flex items-start">
        <List>
          <Card />
        </List>
        <List>
          <Card />
        </List>
        <List>
          <Card />
        </List>
        <List>
          <Card />
        </List>
        <List>
          <Card />
        </List>
      </div>
    </div>
  );
}
