function searchJobs(jobTitle, jobLocation) {

    const titleLower = jobTitle.toLowerCase();
    const locationLower = jobLocation.toLowerCase();


    const result = jobs.filter(job => {
        const titleMatch = job.title.toLowerCase().includes(titleLower);
        const locationMatch = job.location.toLowerCase().includes(locationLower);
        return titleMatch && locationMatch;
    });


    return {
        result: result,
        count: result.length
    };
}
