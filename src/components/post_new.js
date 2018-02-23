import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createPost } from '../actions';


class PostsNew extends Component {

    renderField(field) {
        return (
            <div className="form-group ">
                <label>{field.label}</label>
                <input
                    placeholder="title"
                    type="text"
                    className="form-control"
                    {...field.input}
                />
                <p className="text-danger"> {field.meta.touched ? field.meta.error : ''}</p>
            </div>
        );
    }
    onSubmit(values) {
        // console.log('values',values);
        this.props.createPost(values);
        this.props.history.push('/');
    }

    render() {

        const { handleSubmit } = this.props;

        return (
            <div>
                <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                    <Field
                        name="title"
                        label="Title"
                        component={this.renderField}
                    />
                    <Field
                        label="Categories"
                        name="categories"
                        component={this.renderField}
                    />
                    <Field
                        label="Post Content"
                        name="content"
                        component={this.renderField} />

                    <button
                        type="submit"
                        className="btn btn-primary">
                        Submit
                        </button>

                    <Link to="/" className="btn btn-danger">
                        Cancel
                        </Link>

                </form>

            </div>

        );
    }
}

function validate(values) {
    const errors = {};
    if (!values.title) {
        errors.title = "Enter a title";
    }
    if (!values.categories) {
        errors.categories = "Enter categories";
    }
    if (!values.content) {
        errors.content = "Enter  content";
    }
    return errors;
}

const mapDispatchToProps = dispatch => {
    return {
        createPost: (values) => dispatch({type: 'create_post_saga', payload: {data: values}})
    }
}

export default reduxForm({
    form: 'PostsNewForm',
    validate: validate
})(
    connect(null, mapDispatchToProps )(PostsNew)
);