import restClient from "@/services/rest-client";

const getDirectReports= (tsoId: string) => {
  const url = `https://employee-search-api.apps.cf.humana.local/employees?tsoid=${tsoId}`;
  return restClient.get(url);
};

export default {
  getDirectReports
};
