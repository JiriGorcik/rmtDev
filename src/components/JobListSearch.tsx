import { useJobItemsContext } from "../hooks/hooks";
import JobList from "./JobList";

const JobListSearch = () => {
  const { jobItemsSortedAndSliced, isLoading } = useJobItemsContext();

  return <JobList jobItems={jobItemsSortedAndSliced} isLoading={isLoading} />;
};

export default JobListSearch;
