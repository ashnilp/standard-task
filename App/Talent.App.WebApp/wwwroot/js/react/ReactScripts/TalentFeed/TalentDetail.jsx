import React from 'react';
import ReactDOM from 'react-dom';
import Cookies from 'js-cookie'
import { BodyWrapper, loaderData } from '../Layout/BodyWrapper.jsx'
import TalentCardDetail from '../TalentFeed/TalentCardDetail.jsx';
import CompanyProfile from '../TalentFeed/CompanyProfile.jsx';
import FollowingSuggestion from '../TalentFeed/FollowingSuggestion.jsx';

export default class TalentDetail extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            profileData: {
                FirstName: '',
                LastName: '',
                VisaStatus: '',
                Description: ''
            }
        }

        this.updateWithoutSave = this.updateWithoutSave.bind(this)
        this.componentDidMount = this.componentDidMount.bind(this)
        this.loadData = this.loadData.bind(this)
    }

    componentDidMount() {
        this.loadData()
    }

    //loadData()  url: 'http://localhost:60290/profile/profile/getTalentProfile',
    loadData() {
        var cookies = Cookies.get('talentAuthToken');
        $.ajax({
            url: 'http://localhost:60290/profile/profile/getTalentProfile',
            headers: {
                'Authorization': 'Bearer ' + cookies,
                'Content-Type': 'application/json'
            },
            type: "GET",
            success: function (res) {
                this.updateWithoutSave(res.data)
            }.bind(this)
        })
    }

    updateWithoutSave() {
        let newProfile = Object.assign({}, this.state.profileData, newValues)
        this.setState({
            profileData: newProfile
        }, () => console.log(this.state.profileData))
    }

   
    render() {


        return (

            <div className="ui items">
                <div className="item">
                    <div className="image">
                        <img src="https://semantic-ui.com/images/avatar/small/jenny.jpg" />
                    </div>
                    <div className="content">
                        <div className="description">Talent snapshot</div>
                        <div className="description">
                            <div>CURRENT EMPLOYER </div>
                            <div>ABC </div>
                        </div>
                        <div className="description">
                            <div>VISA STATUS</div>
                            <div>Citizen</div>
                        </div>
                        <div className="description">
                            <div>POSITION</div>
                            <div>Software Developer</div>
                        </div>
                    </div>
                </div>
            </div>
            )
    }
}