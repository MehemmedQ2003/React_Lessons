const islamicFilms = [
    {
        id: 1,
        title: 'The Message',
        year: 1976,
        description: 'İslamın başlanğıcını və Peyğəmbər Məhəmmədin (s.ə.s) həyatını təsvir edən klassik film.'
    },
    {
        id: 2,
        title: 'Omar',
        year: 2012,
        description: 'Xəlifə Ömər ibn Xəttabın həyatını və İslamın genişlənməsini əks etdirən tarixi serial.'
    },
    {
        id: 3,
        title: 'Muhammad: The Messenger of God',
        year: 2015,
        description: 'Peyğəmbər Məhəmmədin (s.ə.s) uşaqlıq və gənclik illərini təsvir edən İran istehsalı film.'
    },
    {
        id: 4,
        title: 'Kingdom of Heaven',
        year: 2005,
        description: 'Səlib yürüşləri zamanı müsəlmanlarla xristianlar arasındakı qarşılıqlı münasibətləri təsvir edən tarixi film.'
    },
    {
        id: 5,
        title: 'Bilal: A New Breed of Hero',
        year: 2015,
        description: 'İslamın ilk azan oxuyan səhabəsi Bilal ibn Rəbahın həyatına əsaslanan animasiya filmi.'
    },
    {
        id: 6,
        title: 'Lion of the Desert',
        year: 1980,
        description: 'Liviya mücahidi Ömər Muxtarın İtalyan müstəmləkəçilərinə qarşı apardığı mübarizəni təsvir edən tarixi film.'
    },
    {
        id: 7,
        title: 'Salahuddin Al Ayyubi',
        year: 2012,
        description: 'Müsəlman komandan Salahəddin Əyyubinin həyatını və Qüdsün fəthini təsvir edən serial.'
    },
    {
        id: 8,
        title: 'Islam: Empire of Faith',
        year: 2000,
        description: 'İslam tarixini və mədəniyyətini təsvir edən sənədli film.'
    },
    {
        id: 9,
        title: 'The Last Temptation of Christ',
        year: 1988,
        description: 'İsa peygəmbərin həyatını təsvir edən film.'
    },
    {
        id: 10,
        title: 'The 13th Warrior',
        year: 1999,
        description: 'Vikinqlərin müsəlmanlarla birgə mübarizəsini təsvir edən tarixi film.'
    }
];

import React, { useState, useEffect } from 'react';
function Search() {
    const [search, setSearch] = useState('');
    const [filteredFilms, setFilteredFilms] = useState(islamicFilms);

    useEffect(() => {
        setFilteredFilms(
            islamicFilms.filter((film) =>
                film.title.toLowerCase().includes(search.toLowerCase()) || film.description.toLowerCase().includes(search.toLowerCase())
            )
        );
    }, [search]);
    
    return (
        <div className="container mt-5">
            <h1>Search Bar</h1>
            <div className="input-group">
                <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} className="form-control" placeholder="Search film" />
            </div>
            <div className="my-4">
                <h3 className="text-success">Islamic Films</h3>
                <div className="row">
                    {filteredFilms.length > 0 ? (
                        filteredFilms.map((film) => (
                            <div className="col-lg-4 my-2" key={film.id}>
                                <div className="card mb-4 shadow-lg" style={{ width: "100%", height: "100%" }}>
                                    <div className="card-body">
                                        <h5 className="card-title">{film.title}</h5>
                                        <p className="card-text">Year: {film.year}</p>
                                        <p className="card-text">{film.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="text-muted">No results found.</p>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Search