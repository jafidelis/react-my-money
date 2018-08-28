import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import inputLabel from '../common/form/inputLabel';

class BillingCycleForm extends Component {
    render() {
        const { handleSubmit } = this.props;
        return (
            <form role="form" onSubmit={handleSubmit}>
                <div className="box-body">
                    <Field name="name" component={inputLabel} label="Nome" cols="12 4" placeholder="Informe o nome" />
                    <Field name="month" component={inputLabel} label="Mês" cols="12 4" placeholder="Informe o mês" />
                    <Field name="year" component={inputLabel} label="Ano" cols="12 4" placeholder="Informe o ano" />
                </div>
                <div className="box-footer">
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>
        )
    }
}

export default reduxForm({ form: 'billingCycleForm' })(BillingCycleForm);