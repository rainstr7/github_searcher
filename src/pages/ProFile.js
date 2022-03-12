import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GithubContext } from "../context/github/githubContext";
import { NavLink } from "react-router-dom";
import { Repos } from "../components/Repos";

export const ProFile = () => {
    const { urlName } = useParams();
    const { getRepos, getUser, loading, user, repos } = useContext(GithubContext);

    useEffect(() => {
        getUser(urlName);
        getRepos(urlName);
    }, [])

    if (loading) {
        return (<p className="text-center">Загрузка...</p>)

    }
    const {
        name, company, avatar_url,
        url, location, bio, blog,
        login, html_url, followers, following,
        public_repos, public_gists
    } = user;
    return (
        <>
            <NavLink to='/' className="btn btn-link">
                На главную
            </NavLink>
            <div className="card mb-4">
                <div className="card-body">
                    <div className="row">
                        <div className="col-sm-3 text-center">
                            <img style={{width: '150px'}} src={avatar_url} alt={name} rel='noopener noreferrer'/>
                            <h1>{name}</h1>
                            {location && <p className=""> Местоположение: {location}</p>}
                        </div>
                        <div className="col">
                            {bio && <><h1>BIO</h1><p>{bio}</p></>}
                            <a
                                href={html_url}
                                className='btn btn-dark mb-2'
                                target='_blank'
                            >
                                Открыть профиль
                            </a>
                            <ul className="list-group">
                                {
                                    login && <li className="list-group-item"><strong>User name: {login}</strong></li>
                                }
                                {
                                    company && <li className="list-group-item"><strong>Компания: {company}</strong></li>
                                }
                                {
                                    blog && <li className="list-group-item"><strong>Website: {blog}</strong></li>
                                }
                            </ul>
                            <div className="badge bg-primary m-2">Подписчики: {followers}</div>
                            <div className="badge bg-secondary m-2">Подписан: {following}</div>
                            <div className="badge bg-success m-2">Репозитории: {public_repos}</div>
                            <div className="badge bg-warning m-2">Gists: {public_gists}</div>
                        </div>
                    </div>
                </div>
            </div>
            <Repos repos={repos}/>
        </>
    );
}