import React, { Component } from 'react';
import './ProgramCategory.css';
import {
    Link,
    useHistory } from 'react-router-dom';
import { viewCategoryProgram } from "../../actions/programActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";
// import { browserHistory } from 'react-router';


class ProgramCategory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            progams: [
                {
                    name: 'Bangunan',
                    src: require('../../assets/img/ic_bangunan.png')
                },
                {
                    name: 'Koleksi',
                    src: require('../../assets/img/ic_koleksi.png')
                },
                {
                    name: 'Program',
                    src: require('../../assets/img/ic_program.png')
                },
                {
                    name: 'Fasilitas',
                    src: require('../../assets/img/ic_fasilitas.png')
                }
            ],
            errors: {}
        };
    }
    

    handleClick(category) {
        this.props.viewCategoryProgram(category, this.props.history);

    }
    

    render(){

        return (
            <div id="kategori" className="Home-DC">
                <p className="Home-DC-Title">KATEGORI DONASI</p>
                <ul>
                    {this.state.progams.map(program => {
                        return (
                                <li className="Home-DC-list">
                                    <Link onClick={() => this.handleClick(program.name)} style={{ textDecoration: 'none' }}>
                                        <img src={program.src}  alt="donate-image" />
                                        <p>{program.name}</p>
                                    </Link>
                                </li>
                        )
                    })}
                </ul>
                <div className="Line">
                </div>
            </div>
        )
    }
}


ProgramCategory.propTypes = {
    viewCategoryProgram: PropTypes.func.isRequired,
    programs: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
    programs: state.programs
})

export default connect(
    mapStateToProps,
    { viewCategoryProgram }
)(ProgramCategory);
