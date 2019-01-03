// React
import React, { Component } from "react";
// Semantic
import {
  Feed,
  Icon,
  Image,
  Button,
  Segment,
  Card,
  Dimmer,
  Loader
} from "semantic-ui-react";
// Images
import elliot from "../images/avatar/small/elliot.jpg";
import helen from "../images/avatar/small/helen.jpg";
import wireframe from "../images/wireframe/image.png";
import jenny from "../images/avatar/small/jenny.jpg";
import joe from "../images/avatar/small/joe.jpg";
import justen from "../images/avatar/small/justen.jpg";
import matthew from "../images/avatar/large/matthew.png";
import shortpara from "../images/wireframe/short-paragraph.png";
import logo from "../images/logo.svg";
// Css
import "../css/App.css";
import "semantic-ui-css/semantic.min.css";
// LoaderExampleLoader
const LoaderExampleLoader = () => (
  <Segment>
    <Dimmer active>
      <Loader />
    </Dimmer>
    <Image src={shortpara} />
  </Segment>
);
// CardExampleCard
const CardExampleCard = () => (
  <Card>
    <Image src={matthew} />
    <Card.Content>
      <Card.Header>Matthew</Card.Header>
      <Card.Meta>
        <span className="date">Joined in 2018</span>
      </Card.Meta>
      <Card.Description>
        Matthew is a musician living in Nashville.
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name="user" />
        22 Friends
      </a>
    </Card.Content>
  </Card>
);
// FeedExampleBasic
const FeedExampleBasic = () => (
  <Feed>
    <Feed.Event>
      <Feed.Label>
        <Image src={elliot} size="small" />
      </Feed.Label>
      <Feed.Content>
        <Feed.Summary>
          <Feed.User>Elliot Fu</Feed.User> added you as a friend
          <Feed.Date>1 Hour Ago</Feed.Date>
        </Feed.Summary>
        <Feed.Meta>
          <Feed.Like>
            <Icon name="like" />4 Likes
          </Feed.Like>
        </Feed.Meta>
      </Feed.Content>
    </Feed.Event>

    <Feed.Event>
      <Feed.Label image={helen} alt="helen" />
      <Feed.Content>
        <Feed.Summary>
          <a href="https://react.semantic-ui.com/views/feed/#types-basic">
            Helen Troy
          </a>{" "}
          added
          <a href="https://react.semantic-ui.com/views/feed/#types-basic">
            2 new illustrations
          </a>
          <Feed.Date>4 days ago</Feed.Date>
        </Feed.Summary>
        <Feed.Extra images>
          <a href="https://react.semantic-ui.com/views/feed/#types-basic">
            <Image src={wireframe} size="small" />
          </a>
          <a href="https://react.semantic-ui.com/views/feed/#types-basic">
            <Image src={wireframe} size="small" />
          </a>
        </Feed.Extra>
        <Feed.Meta>
          <Feed.Like>
            <Icon name="like" />1 Like
          </Feed.Like>
        </Feed.Meta>
      </Feed.Content>
    </Feed.Event>

    <Feed.Event>
      <Feed.Label image={jenny} alt="jenny" />
      <Feed.Content>
        <Feed.Summary
          date="2 Days Ago"
          user="Jenny Hess"
          content="add you as a friend"
        />
        <Feed.Meta>
          <Feed.Like>
            <Icon name="like" />8 Likes
          </Feed.Like>
        </Feed.Meta>
      </Feed.Content>
    </Feed.Event>

    <Feed.Event>
      <Feed.Label image={joe} alt="joe" />
      <Feed.Content>
        <Feed.Summary>
          <a href="https://react.semantic-ui.com/views/feed/#types-basic">
            Joe Henderson
          </a>{" "}
          posted on his page
          <Feed.Date>3 days ago</Feed.Date>
        </Feed.Summary>
        <Feed.Extra text>
          Ours is a life of constant reruns. We're always circling back to where
          we'd we started, then starting all over again. Even if we don't run
          extra laps that day, we surely will come back for more of the same
          another day soon.
        </Feed.Extra>
        <Feed.Meta>
          <Feed.Like>
            <Icon name="like" />5 Likes
          </Feed.Like>
        </Feed.Meta>
      </Feed.Content>
    </Feed.Event>

    <Feed.Event>
      <Feed.Label image={justen} alt="justen" />
      <Feed.Content>
        <Feed.Summary>
          <a href="https://react.semantic-ui.com/views/feed/#types-basic">
            Justen Kitsune
          </a>{" "}
          added{" "}
          <a href="https://react.semantic-ui.com/views/feed/#types-basic">
            2 new photos
          </a>{" "}
          of you
          <Feed.Date>4 days ago</Feed.Date>
        </Feed.Summary>
        <Feed.Extra images>
          <a href="https://react.semantic-ui.com/views/feed/#types-basic">
            <Image src={wireframe} size="small" />
          </a>
          <a href="https://react.semantic-ui.com/views/feed/#types-basic">
            <Image src={wireframe} size="small" />
          </a>
        </Feed.Extra>
        <Feed.Meta>
          <Feed.Like>
            <Icon name="like" />
            41 Likes
          </Feed.Like>
        </Feed.Meta>
      </Feed.Content>
    </Feed.Event>
  </Feed>
);
// Begin
class App extends Component {
  render() {
    return (
      <div className="App">
        <Segment inverted>
          <Icon inverted color="red" name="users" />
          <Icon inverted color="orange" name="users" />
          <Icon inverted color="yellow" name="users" />
          <Icon inverted color="olive" name="users" />
          <Icon inverted color="green" name="users" />
          <Icon inverted color="teal" name="users" />
          <Icon inverted color="blue" name="users" />
          <Icon inverted color="violet" name="users" />
          <Icon inverted color="purple" name="users" />
          <Icon inverted color="pink" name="users" />
          <Icon inverted color="brown" name="users" />
          <Icon inverted color="grey" name="users" />
          <Icon inverted color="black" name="users" />
        </Segment>
        <Segment>
          <Button animated>
            <Button.Content visible>Next</Button.Content>
            <Button.Content hidden>
              <Icon name="arrow right" />
            </Button.Content>
          </Button>
          <Button animated="vertical">
            <Button.Content hidden>Shop</Button.Content>
            <Button.Content visible>
              <Icon name="shop" />
            </Button.Content>
          </Button>
          <Button animated="fade">
            <Button.Content visible>Sign-up for a Pro account</Button.Content>
            <Button.Content hidden>$12.99 a month</Button.Content>
          </Button>
        </Segment>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <LoaderExampleLoader />
        <FeedExampleBasic />
        <Segment>
          <CardExampleCard />
        </Segment>
        <Segment inverted>
          <Button inverted>Standard</Button>
          <Button inverted color="red">
            Red
          </Button>
          <Button inverted color="orange">
            Orange
          </Button>
          <Button inverted color="yellow">
            Yellow
          </Button>
          <Button inverted color="olive">
            Olive
          </Button>
          <Button inverted color="green">
            Green
          </Button>
          <Button inverted color="teal">
            Teal
          </Button>
          <Button inverted color="blue">
            Blue
          </Button>
          <Button inverted color="violet">
            Violet
          </Button>
          <Button inverted color="purple">
            Purple
          </Button>
          <Button inverted color="pink">
            Pink
          </Button>
          <Button inverted color="brown">
            Brown
          </Button>
          <Button inverted color="grey">
            Grey
          </Button>
          <Button inverted color="black">
            Black
          </Button>
        </Segment>
        <Segment inverted>
          <Button basic inverted>
            Standard
          </Button>
          <Button basic inverted color="red">
            Red
          </Button>
          <Button basic inverted color="orange">
            Orange
          </Button>
          <Button basic inverted color="yellow">
            Yellow
          </Button>
          <Button basic inverted color="olive">
            Olive
          </Button>
          <Button basic inverted color="green">
            Green
          </Button>
          <Button basic inverted color="teal">
            Teal
          </Button>
          <Button basic inverted color="blue">
            Blue
          </Button>
          <Button basic inverted color="violet">
            Violet
          </Button>
          <Button basic inverted color="purple">
            Purple
          </Button>
          <Button basic inverted color="pink">
            Pink
          </Button>
          <Button basic inverted color="brown">
            Brown
          </Button>
          <Button basic inverted color="grey">
            Grey
          </Button>
          <Button basic inverted color="black">
            Black
          </Button>
        </Segment>
      </div>
    );
  }
}

export default App;
