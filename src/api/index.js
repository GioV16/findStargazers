const {Octokit} = require('@octokit/core');

const octokit = new Octokit();

export const getStar = async (owner, repo) => {
  try {
    const {data: stars} = await octokit.request(
      'GET /repos/{owner}/{repo}/stargazers',
      {
        owner,
        repo,
      },
    );
    console.log('RES found in getStar () : ', stars);
    return starsModelingReponse(stars);
  } catch (err) {
    console.log('ERROR found in getStar () : ', err);
    throw err;
  }
};

const starsModelingReponse = stars => {
  const newStars = [];

  stars.forEach(star => {
    console.log(star.login);
    let newStar = {
      username: star.login,
      avatar: star.avatar_url,
    };
    newStars.push(newStar);
  });

  return newStars;
};
