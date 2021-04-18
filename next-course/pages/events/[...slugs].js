import { useRouter } from "next/router";
import { getFilteredEvents } from "../../dummy-data";
const FilteredEventsPage = () => {
  const router = useRouter();
  const filteredData = router.query.slugs;

  if (!filteredData) {
    return <p className="center">...loading</p>;
  }

  const numYear = +filteredData[0];
  const numMonth = +filteredData[1];

  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numYear < 2021 ||
    numMonth < 1 ||
    numMonth > 12
  ) {
    return <p>Invalid Filter</p>;
  }

  const filteredEvents = getFilteredEvents({ year: numYear, month: numMonth });

  if (!filteredEvents || filteredEvents.length === 0) {
    return <p>No Result Found</p>;
  }
  return (
    <div>
      <h1>Filter Event</h1>
    </div>
  );
};

export default FilteredEventsPage;
