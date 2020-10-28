import React from 'react'

const Topbar = () => {
    return (
        <header id="page-topbar">
            <div className="navbar-header">

                <div className="d-flex">
                    <div class="navbar-brand-box">
                        <a href="index.html" class="logo logo-dark">
                            <span class="logo-sm">
                                <img src="/images/logo.svg" alt="" height="22" />
                            </span>
                            <span class="logo-lg">
                                <img src="/images/logo-dark.png" alt="" height="17" />
                            </span>
                        </a>

                        <a href="index.html" class="logo logo-light">
                            <span class="logo-sm">
                                <img src="/images/logo-light.svg" alt="" height="22" />
                            </span>
                            <span class="logo-lg">
                                <img src="/images/logo-light.png" alt="" height="19" />
                            </span>
                        </a>
                    </div>

                    <button type="button" class="btn btn-sm px-3 font-size-16 header-item waves-effect" id="vertical-menu-btn">
                        <i class="bx bx-menu"></i>
                    </button>

                    <form class="app-search d-none d-lg-block">
                        <div class="position-relative">
                            <input type="text" class="form-control" placeholder="Search..." />
                            <span class="bx bx-search-alt"></span>
                        </div>
                    </form>
                </div>

                <div className="d-flex">

                    <div className="dropdown d-none d-lg-inline-block ml-1">
                        <button type="button" className="btn header-item noti-icon waves-effect" data-toggle="fullscreen">
                            <i className="bx bx-fullscreen"></i>
                        </button>
                    </div>

                    <div className="dropdown d-inline-block">
                        <button type="button" className="btn header-item noti-icon waves-effect" id="page-header-notifications-dropdown"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="bx bx-bell bx-tada"></i>
                            <span className="badge badge-danger badge-pill">3</span>
                        </button>
                        <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right p-0"
                            aria-labelledby="page-header-notifications-dropdown">
                            <div className="p-3">
                                <div className="row align-items-center">
                                    <div className="col">
                                        <h6 className="m-0"> Notifications </h6>
                                    </div>
                                    <div className="col-auto">
                                        <a href="#" className="small"> View All</a>
                                    </div>
                                </div>
                            </div>
                            <div data-simplebar >
                                <a href="#" className="text-reset notification-item">
                                    <div className="media">
                                        <div className="avatar-xs mr-3">
                                            <span className="avatar-title bg-primary rounded-circle font-size-16">
                                                <i className="bx bx-cart"></i>
                                            </span>
                                        </div>
                                        <div className="media-body">
                                            <h6 className="mt-0 mb-1">Your order is placed</h6>
                                            <div className="font-size-12 text-muted">
                                                <p className="mb-1">If several languages coalesce the grammar</p>
                                                <p className="mb-0"><i className="mdi mdi-clock-outline"></i> 3 min ago</p>
                                            </div>
                                        </div>
                                    </div>
                                </a>



                            </div>
                            <div className="p-2 border-top">
                                <a className="btn btn-sm btn-link font-size-14 btn-block text-center" href="">
                                    <i className="mdi mdi-arrow-right-circle mr-1"></i> View More..
                                    </a>
                            </div>
                        </div>
                    </div>

                    <div className="dropdown d-inline-block">
                        <button type="button" className="btn header-item waves-effect" id="page-header-user-dropdown"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <img className="rounded-circle header-profile-user" src="/images/avatar.png"
                                alt="Header Avatar" />
                            <span className="d-none d-xl-inline-block ml-1">Henry</span>
                            <i className="mdi mdi-chevron-down d-none d-xl-inline-block"></i>
                        </button>
                        <div className="dropdown-menu dropdown-menu-right">

                            <a className="dropdown-item" href="#"><i className="bx bx-user font-size-16 align-middle mr-1"></i> Profile</a>
                            <a className="dropdown-item" href="#"><i className="bx bx-wallet font-size-16 align-middle mr-1"></i> My Wallet</a>
                            <a className="dropdown-item d-block" href="#"><span className="badge badge-success float-right">11</span><i className="bx bx-wrench font-size-16 align-middle mr-1"></i> Settings</a>
                            <a className="dropdown-item" href="#"><i className="bx bx-lock-open font-size-16 align-middle mr-1"></i> Lock screen</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item text-danger" href="#"><i className="bx bx-power-off font-size-16 align-middle mr-1 text-danger"></i> Logout</a>
                        </div>
                    </div>



                </div>
            </div>
        </header>
    )
}

export default Topbar
