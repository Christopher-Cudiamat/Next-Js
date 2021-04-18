import { getAllEvents } from "../../dummy-data";
import EventList from "../../components/events/event-list";
import { useRouter } from "next/router";
import EventsSearch from "../../components/events/events-search";
import { Fragment } from "react";
const AllEventsPage = () => {
  const events = getAllEvents();
  const router = useRouter();

  const findEventsHandler = (year, month) => {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  };
  return (
    <Fragment>
      <h1>ALL EVENTS</h1>
      <EventsSearch onSearch={findEventsHandler} />
      <EventList items={events} />
    </Fragment>
  );
};

export default AllEventsPage;
