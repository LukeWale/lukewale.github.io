import React from "react";
import GithubReposData from '../../data/repos.json';
import imagePlaceholder from '../../assets/images/placeholder-image.png';
import './Repos.css';

const Repos = () => {
    return (
        <div data-testid="repos">
            <h2 className="text-center text-4xl">Public Repos</h2>
            <div data-testid="repo-list" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                    GithubReposData.map(singleData => {
                        let pagesURL = singleData.pagesUrl;
                        let username = singleData.userName;
                        return (
                            singleData.repos.map(repo => {
                                return (
                                    <div key={repo.githubUrl} className="text-center">
                                        <img src={imagePlaceholder} alt="" data-testid="repo-image"/>
                                        <h3 data-testid="repo-name">{repo.name}</h3>
                                        <a data-testid="repo-github-link" className="bg-primary p-5 mb-[10px] block rounded-[10px] text-white font-semibold" href={`https://github.com/${username}/${repo.githubUrl}`} target="_blank" rel="noreferrer" >Repo</a>
                                        <a data-testid="repo-view-link" className="bg-primary p-5 mb-[10px] block rounded-[10px] text-white font-semibold" href={`${pagesURL}/${repo.githubPage}`} target="_blank" rel="noreferrer">View</a>
                                    </div>
                                )
                            })
                        )
        
                        
                            
                        })
                }
            </div>
        </div>
    )
}

export default Repos;