//import { MongoClient, ObjectId } from 'mongodb';
import { Fragment } from 'react';
import Head from 'next/head';

import MeetupDetail from '../../components/meetups/MeetupDetail';

function MeetupDetails(props) {
  return (
    <Fragment>
      <Head>
        <title>{props.meetupData.title}</title>
        <meta name='description' content={props.meetupData.description} />
      </Head>
      <MeetupDetail
        image={props.meetupData.image}
        title={props.meetupData.title}       
        description={props.meetupData.description}
      />
    </Fragment>
  );
}

export async function getStaticPaths() {
  // const client = await MongoClient.connect(
  //   'mongodb+srv://maximilian:TU6WdZF2EjFWsqUt@cluster0.ntrwp.mongodb.net/meetups?retryWrites=true&w=majority'
  // );
  // const db = client.db();

  // const meetupsCollection = db.collection('meetups');

  // const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();

  // client.close();

  const meetups = JSON.parse('[{"_id": "1"}]')

  return {
    fallback: 'blocking',
    paths: meetups.map((meetup) => ({
      params: { meetupId: meetup._id.toString() },
    })),
  };
}

export async function getStaticProps(context) {
  // fetch data for a single meetup

  const meetupId = context.params.meetupId;

  // const client = await MongoClient.connect(
  //   'mongodb+srv://maximilian:TU6WdZF2EjFWsqUt@cluster0.ntrwp.mongodb.net/meetups?retryWrites=true&w=majority'
  // );
  // const db = client.db();

  // const meetupsCollection = db.collection('meetups');

  // const selectedMeetup = await meetupsCollection.findOne({
  //   _id: ObjectId(meetupId),
  // });

  // client.close();

  const selectedMeetup =  JSON.parse('{"title": "Cat", "image": "https://media.istockphoto.com/photos/portrait-of-a-cat-picture-id174875518", "description": "Fluffy Cat", "_id": "1"}')


  return {
    props: {
      meetupData: {
        id: selectedMeetup._id.toString(),
        title: selectedMeetup.title,
        image: selectedMeetup.image,
        description: selectedMeetup.description,
      },
    },
  };
}

export default MeetupDetails;
