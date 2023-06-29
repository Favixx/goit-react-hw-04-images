import React, { useState } from 'react'
import styles from './Searchbar.module.css'
import { AiOutlineSearch } from 'react-icons/ai'
import PropTypes from 'prop-types'

const Searchbar = ({ onSubmit }) => {
    const [query, setQuery] = useState('')

    const handleChange = (event) => {
        setQuery(event.target.value);
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(query)
    }
    return (
        <header className={styles.Searchbar}>
            <form className={styles.SearchForm} onSubmit={handleSubmit}>
                <button type="submit" className={styles.SearchFormBtn}>
                    <span className={styles.SearchFormButtonLabel}>
                        <AiOutlineSearch />
                    </span>
                </button>

                <input
                    className={styles.SearchFormInput}
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                    value={query}
                    onChange={handleChange}
                />
            </form>
        </header>
    );
}
export default Searchbar
Searchbar.propTypes = {
    onSubmit: PropTypes.func.isRequired,
}