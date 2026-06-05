import SettingCard from "./Settingcard";
import PageTitle from "../../components/Common/PageTitle";

function SettingPage() {
    const Title = [
        { name: "general settings" },
        { name: "advance settings" },
        { name: "profile settings" }
    ];

    return (
        <>
        <PageTitle title="Setting" />
            <div className="row g-3">
                <nav>
                    <div className="nav nav-tabs card-bg rounded-3 p-2 setting_type_one border-0" id="nav-tab" role="tablist">
                        <button className="nav-link text-capitalize fw-semibold active" id="nav-general-tab" data-bs-toggle="tab"
                            data-bs-target="#nav-general" type="button" role="tab" aria-controls="nav-general" aria-selected="true">general settings</button>
                        <button className="nav-link text-capitalize fw-semibold" id="nav-advance-tab" data-bs-toggle="tab"
                            data-bs-target="#nav-advance" type="button" role="tab" aria-controls="nav-advance" aria-selected="false">advance settings</button>
                        <button className="nav-link text-capitalize fw-semibold" id="nav-profile-tab" data-bs-toggle="tab"
                            data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">profile settings</button>
                    </div>
                </nav>
                <div className="tab-content" id="nav-tabContent">
                    <div className="tab-pane card-bg rounded-3 p-3 fade show active" id="nav-general" role="tabpanel" aria-labelledby="nav-general-tab" tabIndex="0">
                        <SettingCard Title={Title[0]} />
                    </div>
                    <div className="tab-pane card-bg rounded-3 p-3 fade" id="nav-advance" role="tabpanel" aria-labelledby="nav-advance-tab" tabIndex="0">
                        <SettingCard Title={Title[1]} />
                    </div>
                    <div className="tab-pane card-bg rounded-3 p-3 fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab" tabIndex="0">
                        <SettingCard Title={Title[2]} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default SettingPage;