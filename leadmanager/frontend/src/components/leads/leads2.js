import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { allleads } from '../../actions/leads2';

export class Leads2 extends Component {
  static propTypes = {
    leads: PropTypes.array.isRequired,
    allleads: PropTypes.func.isRequired,
  
  };

  componentDidMount() {
    this.props.allleads();
  }

  render() {
    return (
      <Fragment>
        <h2><br />Wall<br /></h2>
        
        {this.props.leads2.map((lead2) => (
            
            
        <div class="card" >
  <div class="card-header">
    {lead2.title}
  </div>
  
    <div className="card-body">
        <blockquote className="blockquote mb-0">
        <p>{lead2.content}</p>
        <footer className="blockquote-footer"><cite title="Source Title">{lead2.name} </cite></footer>
        </blockquote>
    </div>
    
    </div>
    
    
    ))}

      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  leads2: state.leads2.leads2,
});

export default connect(mapStateToProps, { allleads})(Leads2);
