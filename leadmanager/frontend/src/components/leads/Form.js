import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addLead } from '../../actions/leads';

export class Form extends Component {
  state = {
    name: '',
    title: '',
    content: '',
  };

  static propTypes = {
    addLead: PropTypes.func.isRequired,
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  onSubmit = (e) => {
    e.preventDefault();
    const { name, title, content } = this.state;
    const lead = { name, title, content };
    this.props.addLead(lead);
    this.setState({
      name: '',
      title: '',
      content: '',
    });
  };

  render() {
    const { name, title, content } = this.state;
    return (
      <div className="card card-body mt-4 mb-4">
        <h2>Create new Blog</h2>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Name you want to display</label>
            <input
              className="form-control"
              type="text"
              name="name"
              onChange={this.onChange}
              value={name}
            />
          </div>
          <div className="form-group">
            <label>Title</label>
            <input
              className="form-control"
              type="text"
              name="title"
              onChange={this.onChange}
              value={title}
            />
          </div>
          <div className="form-group">
            <label>Content</label>
            <textarea
              className="form-control"
              type="text"
              name="content"
              onChange={this.onChange}
              value={content}
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default connect(null, { addLead })(Form);
