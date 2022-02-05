import { Fragment } from 'react';
import Head from 'next/head';

import MeetupList from '../components/meetups/MeetupList';

let count = 1;

function HomePage(props) { 
  return (      
    <Fragment>   
      <Head>
        <title>Pets</title>
        <meta
          name='description'
          content='Browse a huge list of highly active React meetups!'
        />
      </Head>
      <MeetupList meetups={props.meetups} />
    </Fragment>
  )
}

export async function getStaticProps() {

  console.log("Refresh: " + count);

  count = count + 1;

  const meetups =  JSON.parse('[{"title": "Cat", "image": "https://media.istockphoto.com/photos/best-friends-picture-id473016906", "_id": "1"}, {"title": "Dog", "image": "https://media.istockphoto.com/vectors/fluid-colors-abstract-background-vector-id1185949017", "_id": "2"}]')



  


  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,    
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 1,
  };
}

export default HomePage;
