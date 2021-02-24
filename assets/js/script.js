const customerNameCont = document.querySelector('.customer-name');
var customerFullName = "JOHN. Smithson"
var customerLevel = "Lv. 3 Installer";
var customerLevelNum = 3;
var teamMembers = [
  {teamRole: "Supervisor", levelNumber: 5, installerName: "Mike Hilton", clockInStatus: true, status: "ONLINE"},
  {teamRole: "Installer", levelNumber: 3, installerName: "John Smithson (You)", clockInStatus: true, status: "ONLINE"},
  {teamRole: "Installer", levelNumber: 3, installerName: "George Michaels", clockInStatus: true, status: "ONLINE"},
  {teamRole: "Intern", levelNumber: 1, installerName: "Kevin McDonald", clockInStatus: true, status: "ONLINE"},
  {teamRole: "Designer", levelNumber: 4, installerName: "Ann Winterfield", clockInStatus: true, status: "ONLINE"}
]

// SET DATE
// var d = new Date();
// var dateMonth = d.getMonth()+1;
// var dateDay = d.getDate();
// var daysOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
// var dateYear = d.getFullYear();
// var pageID = document.querySelector('body').getAttribute('data-page');
// document.querySelector('.date').innerText = `${dateMonth}/${dateDay} ${daysOfWeek[d.getDay()]} ${dateYear}`;

const leftSidebarContainer = document.querySelector('.left-sidebar-container');
const leftSidebarContainerExpanded = document.querySelector('.left-sidebar-container.expanded');
const expandMenuBTN = document.querySelectorAll('button.expandMenuButton');
const btnLevelLeftSideBar = document.querySelector('.customer-level > div > span');
const menuExpand = document.querySelectorAll('.menu-expand');
const menuClose = document.querySelectorAll('.menu-close');

// customerNameCont.innerHTML = `<strong>${customerFullName.substring(0, 7)}</strong>`;
// btnLevelLeftSideBar.innerHTML = `<strong>${customerLevel.substring(0, 5)}</strong>`;

// // SET TIME
// (function startTime() {
//   var time = new Date();
//   var h = time.getHours();
//   var m = time.getMinutes();
//   var ampm = h >= 12 ? 'PM' : 'AM';
//   h = h % 12;
//   h = h ? h : 12;
//   m = checkTime(m);
//   document.querySelector('.time').innerText = `${h}:${m} ${ampm}`;
//   var t = setTimeout(startTime, 500);
// })();
//
// function checkTime(i) {
//   if (i < 10) {
//     i = "0" + i
//   };
//   return i;
// }

// EXPANDING MENU
expandMenuBTN.forEach(function(e) {
    e.addEventListener('click', expandMenu, false);
});
function expandMenu(e) {
  console.log(menuExpand);
  document.querySelector('.content-container').classList.toggle('left-sidebar-expanded');
  leftSidebarContainer.classList.toggle('expanded');

  if (!btnLevelLeftSideBar.parentNode.classList.contains('btn-small-' + customerLevelNum)) {
    btnLevelLeftSideBar.parentNode.setAttribute('class', 'btn-small-3 btn-shadow btn-level');
    customerNameCont.innerHTML = `<strong>${customerFullName.substring(0, 7)}</strong>`;
    btnLevelLeftSideBar.innerHTML = `<strong>${customerLevel.substring(0, 5)}</strong>`;
  } else {
    btnLevelLeftSideBar.parentNode.setAttribute('class', 'btn-installer btn-shadow btn-role');
    customerNameCont.innerHTML = `<strong>${customerFullName}</strong>`;
    btnLevelLeftSideBar.innerHTML = `<strong>${customerLevel}</strong>`;
  }
}


// CLOSE/OPEN NOTIFICATION MENU
const notificCenterCont = document.querySelector('.notification-center-container');
const messageCenterCont = document.querySelector('.ijd-messenger-button-container');
const btn_notific = document.querySelector('.btn-notific');
const btn_notific_close = document.querySelector('.btn-notific-close');
if (btn_notific_close) {
  btn_notific_close.addEventListener('click', function(el) {
    notificCenterCont.classList.remove('open');
  }, false);
}
if (btn_notific) {
  btn_notific.addEventListener('click', function(e) {
    if (!notificCenterCont.classList.contains('full-screen')) {
      notificCenterCont.classList.add('open');
    }
    document.querySelector('.new-notifics-number').style.display = "none";
  }, false);
}

// FULL SCREEN NOTIFICATION WINDOW
const view_all_notification = document.querySelector('.view-all-notification');
const btn_notific_page_close = document.querySelector('.btn-notific-page-close');
if (view_all_notification) {
  view_all_notification.addEventListener('click', function(el) {
    notificCenterCont.classList.replace('open', 'full-screen');
  }, false);
}
if (btn_notific_page_close) {
  btn_notific_page_close.addEventListener('click', function(el) {
    notificCenterCont.classList.remove('full-screen');
  }, false);
}

// CLOSE/OPEN MESSENGER MENU
const messengerIMGTitleCont = document.querySelector('.ijd-mbh-img-title-container');
if (messengerIMGTitleCont) {
  messengerIMGTitleCont.addEventListener('click', function(e) {
    if (!messageCenterCont.classList.contains('messenger-open-full-screen')) {
      messageCenterCont.classList.add('messenger-open');
    }
    document.querySelector('.ijd-messenger-button-messages-number').style.display = "none";
  }, false);
}
const messengerCloseButton = document.querySelector('.ijd-messenger-close-button');
if (messengerCloseButton) {
  messengerCloseButton.addEventListener('click', function(el) {
    messageCenterCont.classList.remove('messenger-open');
  }, false);
}


// OPEN REMINDER OPTIONS WINDOW
const reminderWindowClose = document.querySelectorAll('.reminder-window-close');
const btnReminderWindowDelayJob = document.querySelector('.btn-reminder-window-delay-job');
const jobConfirmationContainer = document.querySelector('.job-confirmation-container');
const reminderWindowDelayTimeContainer = document.querySelector('.reminder-window-delay-time-container');
const btnReminderWindowDelayTimeConfirm = document.querySelector('.btn-reminder-window-delay-time-confirm');
const reminderWindowDelayTimeSuccessfulContainer = document.querySelector('.reminder-window-delay-time-successful-con');
const reminderConfirm = document.querySelector('.reminder-confirm');
const selectDashboardWindowBackground = document.querySelector('.select-dashboard-window-background');
const reminderWindowBackground = document.querySelector('.reminder-window-background');

// btnReminderWindowDelayJob.addEventListener('click', function() {
//   jobConfirmationContainer.style.display = "none";
//   reminderWindowDelayTimeContainer.classList.toggle('delay-job');
// }, false);
// btnReminderWindowDelayTimeConfirm.addEventListener('click', function() {
//   reminderWindowDelayTimeContainer.classList.toggle('delay-job');
//   reminderWindowDelayTimeSuccessfulContainer.classList.toggle('delayed-successfully');
// }, false);
// reminderConfirm.addEventListener('click', function() {
//   reminderWindowBackground.classList.toggle('reminder-window-open');
// }, false);
reminderWindowClose.forEach(function(e) {
    e.addEventListener('click', closeOpenReminderWindow, false);
});
function closeOpenReminderWindow() {
  reminderWindowBackground.classList.toggle('reminder-window-open');
}

// SELECTING DASHBOARD
const btnDashboardButton = document.querySelector('.btn-dashboard-button');
const selectDashboardCancel = document.querySelector('.select-dashboard-cancel');
const btnSelectDashboardPersonalCenter = document.querySelector('.btn-select-dashboard-buttons-personal-center');
const transitioningJobDashboard = document.querySelector('.transitioning-job-dashboard');

// btnDashboardButton.addEventListener('click', openCloseSelectDashboard, false);
// selectDashboardCancel.addEventListener('click', openCloseSelectDashboard, false);

// btnSelectDashboardPersonalCenter.addEventListener('click', function() {
//   selectDashboardWindowBackground.classList.toggle('select-dashboard-open');
//   transitioningJobDashboard.classList.add('entering-job-dashboard');
// }, false);

function openCloseSelectDashboard() {
  selectDashboardWindowBackground.classList.toggle('select-dashboard-open');
}

// TEAM MEMBER STATUS TABLE ROW OPEN/CLOSE
const viewButtons = document.querySelectorAll('.tms-mtmt-view-progress');
const teamMemberTableRow = document.querySelectorAll(".tms-mtmt-row");

teamMemberTableRow.forEach(function(el) {
  if (el.classList.contains('open')) {
    el.querySelector('.tms-mtmt-view-progress > span').innerHTML = 'MINIMIZE';
  } else {
    el.querySelector('.tms-mtmt-view-progress > span').innerHTML = 'VIEW';
  }
});

// Adding event listener for view buttons
viewButtons.forEach(function(el) {
  el.addEventListener('click', updateToggledRow, false);
});

// Adding open class for selected row
function updateToggledRow(el) {
    el.currentTarget.querySelector('span').innerHTML = 'MINIMIZE';
    el.currentTarget.parentNode.parentNode.classList.toggle("open");
    if (el.currentTarget.parentNode.parentNode.classList.contains('open')) {
      el.currentTarget.querySelector('span').innerHTML = 'MINIMIZE';
    } else {
      el.currentTarget.querySelector('span').innerHTML = 'VIEW';
    }
}


// Left sidebar tab selected style
switch(tab_active) {
  case "google_navigation_map":
    var currentSelectedSidebarTab = document.querySelector('.btn-ijd-cd-navigate-job-site-container');
    break;
  case "customer_information":
    var currentSelectedSidebarTab = document.querySelector('.viewing-design-preview-expanded-container');
    break;
  case "installation_progress":
    var currentSelectedSidebarTab = document.querySelector('.btn-ijd-cd-installation-progress-container');
    break;
  case "team_member_status":
    var currentSelectedSidebarTab = document.querySelector('.btn-ijd-cd-team-member-status-container');
    break;
  case "special_instructions":
    var currentSelectedSidebarTab = document.querySelector('.btn-ijd-cd-left-sidebar-special-instructions-container');
    break;
  case "job_site_documents":
    var currentSelectedSidebarTab = document.querySelector('.btn-sidebar-special-instructions-container');
    break;
  case "documenting_progress":
    var currentSelectedSidebarTab = document.querySelector('.btn-ijd-cd-left-sidebar-documenting-progress-container');
    break;
  case "design_preview":
    var currentSelectedSidebarTab = document.querySelector('.btn-ijd-design-preview-container');
    break;
  case "issues_gallery":
    var currentSelectedSidebarTab = document.querySelector('.btn-ijd-design-preview-issues-gallery-container');
    break;
  case "issues_during_installation":
    var currentSelectedSidebarTab = document.querySelector('.btn-ijd-cd-left-sidebar-issues-during-installation-container');
    break;
  case "document_center":
    var currentSelectedSidebarTab = document.querySelector('.btn-ijd-design-preview-document-center-container');
    break;
  case "team_member_status":
    var currentSelectedSidebarTab = document.querySelector('.btn-ijd-cd-team-member-status-container');
    break;
  case "order_fulfillment_team_member_status":
    var currentSelectedSidebarTab = document.querySelector('.btn-ijd-cd-io-team-member-status-container');
    break;
  case "orders":
    var currentSelectedSidebarTab = document.querySelector('.btn-ijd-cd-inbound-orders-container');
    break;
  case "order-rooms":
    var currentSelectedSidebarTab = document.querySelector('.btn-ijd-cd-inbound-orders-container');
    break;
  case "order-room-details":
    var currentSelectedSidebarTab = document.querySelector('.btn-ijd-cd-inbound-orders-container');
    break;
  case "order-room-details-step-3":
    var currentSelectedSidebarTab = document.querySelector('.btn-ijd-cd-inbound-orders-container');
    break;
  case "order-fulfillment-status":
    var currentSelectedSidebarTab = document.querySelector('.btn-ijd-cd-inbound-orders-container');
    break;
  case "service_dashboard_personal_calendar":
    var currentSelectedSidebarTab = document.querySelector('.btn-ijd-cd-calendar-container');
    break;
  case "installer_dashboard_calendar_schedule_statistic":
    var currentSelectedSidebarTab = document.querySelector('.btn-ijd-cd-calendar-container');
    break;
  case "installer_dashboard_calendar_schedule_weekly":
    var currentSelectedSidebarTab = document.querySelector('.btn-ijd-cd-calendar-container');
    break;
  case "id_feedback_center_designer_feedback":
    var currentSelectedSidebarTab = document.querySelector('.btn-ipd-submit-feedback-to-designer-container');
    break;
  case "ipd-house-keeping-page":
    var currentSelectedSidebarTab = document.querySelector('.btn-ipd-house-keeping-container');
    break;
  case "id_feedback_center_jobsite_feedback":
    var currentSelectedSidebarTab = document.querySelector('.btn-ipd-submit-feedback-about-jobsite-container');
    break;
  case "id_feedback_center_production_feedback":
    var currentSelectedSidebarTab = document.querySelector('.btn-ipd-submit-feedback-to-production-container');
    break;
  case "ipda_tutorials":
    var currentSelectedSidebarTab = document.querySelector('.btn-ipd-tutorials-saas-container');
    break;
  default:
    var currentSelectedSidebarTab = false;
}
var leftSidebarExpanded = document.querySelector('.expanded');
var allSidebarTabs = document.querySelectorAll('.left-sidebar-tabs-box-shadow');
var allSidebarTabsLink = document.querySelectorAll('.left-sidebar-tabs-box-shadow a');
var sidebarJobsiteLink = document.querySelectorAll('.btn-sidebar-special-instructions-subitem-viewing-text a');

allSidebarTabsLink.forEach(function(el) {
  el.addEventListener('click', function(el) {
    currentSelectedSidebarTab.classList.add('tab-selected');
  }, false);
});
// LEFT SIDEBAR VIEWING SECTION
if (!leftSidebarContainerExpanded) {
  switch (tab_active) {
    case "design_preview":
      document.querySelector('.viewing-ijd-cd-design-preview-container').style.display = "block";
      break;
    case "orders":
      document.querySelector('.viewing-ijd-cd-document-center-container').style.display = "none";
      document.querySelector('.viewing-order-fulfillment-container').style.display = "flex";
      break;
    case "orders-fulfillment-main-page":
      document.querySelector('.viewing-ijd-cd-document-center-container').style.display = "none";
      document.querySelector('.viewing-order-fulfillment-container').style.display = "flex";
      break;
    case "installation_progress":
      document.querySelector('.viewing-ijd-cd-installation-Progress-container').style.display = "block";
      break;
    case "team_member_status":
      document.querySelector('.viewing-ijd-cd-team-member-status-container').style.display = "block";
      break;
    case "issues_during_installation":
      document.querySelector('.viewing-ijd-cd-issues-during-installation-container').style.display = "block";
      break;
    case "issues_gallery":
      document.querySelector('.viewing-ijd-cd-issues-gallery-container').style.display = "block";
      break;
    case "service_dashboard_personal_calendar":
      document.querySelector('.viewing-ijd-cd-calendar-container').style.display = "block";
      break;
    case "installer_dashboard_calendar_schedule_statistic":
      document.querySelector('.viewing-ijd-cd-calendar-schedule-statistic-container').style.display = "block";
      break;
    case "installer_dashboard_calendar_schedule_weekly":
      document.querySelector('.viewing-ijd-cd-calendar-schedule-weekly-container').style.display = "block";
      break;
    case "customer_information":
      document.querySelector('.viewing-ijd-cd-customer-information-container').style.display = "block";
      break;
    case "document_center":
      document.querySelector('.viewing-ijd-cd-document-center-container').style.display = "block";
      break;
    case "documenting_progress":
      document.querySelector('.viewing-ijd-cd-documenting-progress-container').style.display = "block";
      break;
    case "google_navigation_map":
      document.querySelector('.viewing-ijd-cd-navigate-container').style.display = "block";
      break;
    case "special_instructions":
      document.querySelector('.viewing-ijd-cd-special_instructions-container').style.display = "block";
      break;
    case "job_site_documents":
      document.querySelector('.viewing-ijd-cd-job-site-documents-container').style.display = "block";
      break;
    case "job_site_dashboard":
      document.querySelector('.viewing-ijd-cd-job-center-container').style.display = "block";
      break;
    case "main_page":
      document.querySelector('.viewing-ijd-cd-main-page-container').style.display = "block";
      break;
    case "trainee_main_page":
      document.querySelector('.viewing-ijd-cd-trainee-page-container').style.display = "block";
      break;
    case "ipd-human-resources-page":
      document.querySelector('.viewing-ijd-cd-human-resources-container').style.display = "block";
      break;
    case "ipd-human-resources-request-day-off-page":
      document.querySelector('.viewing-ijd-cd-human-resources-request-day-off-container').style.display = "block";
      break;
    case "ipda_tutorials":
      document.querySelector('.viewing-ijd-cd-tutorials-saas-container').style.display = "block";
      break;
    case "ofd_inbound_orders":
      document.querySelector('.viewing-ofd-inbound-orders-container').style.display = "block";
      break;
    case "ofd_mainpage":
      const viewing_ofd_mainpage_container = document.querySelector('.viewing-ofd-mainpage-container');
      if (viewing_ofd_mainpage_container) {
        viewing_ofd_mainpage_container.style.display = "block";
      }
      break;
    case "ipd-house-keeping-page":
      document.querySelector('.viewing-ipda-house-cleaning-container').style.display = "block";
      break;
    case "ipda_performance":
      document.querySelector('.viewing-ipda-performance-container').style.display = "block";
      break;
  }
}

if (currentSelectedSidebarTab) {

  if (leftSidebarExpanded) {
    // document.querySelector('.viewing-order-fulfillment-container').style.display = "none";
    if (tab_active == "order-rooms" || tab_active == "order-room-details") {
      document.querySelector('.btn-ijd-cd-inbound-orders-container').style.background = "linear-gradient(to right, #85AEB3, #8FBFC6)";
      document.querySelector('.btn-ijd-cd-inbound-orders-order-rooms-container').style.display = "flex";
    } else if (tab_active == "order-room-details-step-3") {
      document.querySelector('.btn-ijd-cd-inbound-orders-container').style.background = "linear-gradient(to right, #85AEB3, #8FBFC6)";
      document.querySelector('.btn-ijd-cd-inbound-orders-order-rooms').style.background = "linear-gradient(to right, #85AEB3, #8FBFC6)";
      document.querySelector('.btn-ijd-cd-inbound-orders-room-detail').style.display = "flex";
      document.querySelector('.btn-ijd-cd-inbound-orders-order-rooms-container').style.display = "flex";
      document.querySelector('.btn-ijd-cd-inbound-orders-order-rooms-container').style.flexDirection = "column";
    } else if (tab_active == "order-fulfillment-status") {
      document.querySelector('.btn-ijd-cd-inbound-orders-container').style.background = "linear-gradient(to right, #85AEB3, #8FBFC6)";
      document.querySelector('.btn-ijd-cd-inbound-orders-order-rooms').style.background = "linear-gradient(to right, #85AEB3, #8FBFC6)";
      document.querySelector('.btn-ijd-cd-inbound-orders-room-detail').style.background = "linear-gradient(to right, #85AEB3, #8FBFC6)";
      document.querySelector('.btn-ijd-cd-inbound-orders-room-detail').style.display = "flex";
      document.querySelector('.btn-ijd-cd-inbound-orders-order-rooms-container').style.display = "flex";
      document.querySelector('.btn-ijd-cd-inbound-orders-order-rooms-container').style.flexDirection = "column";
      document.querySelector('.btn-ijd-cd-order-fulfillment-status-container').style.display = "flex";
    }
  }
  if (tab_active == "special_instructions" || tab_active == "job_site_documents") {
    document.querySelector('.btn-ijd-cd-left-sidebar-special-instructions-container').style.display = "none";
    document.querySelector('.btn-sidebar-special-instructions-container').classList.add('tab-selected');
    if (tab_active == "job_site_documents") {
      document.querySelector('.btn-sidebar-subitem-job-site-documents').classList.add('subitem-selected');
      document.querySelector('.btn-sidebar-subitem-job-site-documents a').innerText = "READING";
      document.querySelector('.btn-sidebar-special-instructions-subitem-viewing-text').innerText = "";
    }
  } else {
    currentSelectedSidebarTab.classList.add('tab-selected');
  }
}

if (tab_active == "service_dashboard_personal_calendar") {
  document.querySelector('.btn-payment').style.display = "none";
  document.querySelector('.btn-addons').style.display = "none";
}

const ofd_table_backgroud_16_16_container = document.querySelector(".ofd-mcsacc-ctc-table-main-table-background-16-16");
const ofd_table_backgroud_8_8_container = document.querySelector(".ofd-mcsacc-ctc-table-main-table-background-8-8");
const ofd_table_backgroud_4_4_container = document.querySelector(".ofd-mcsacc-ctc-table-main-table-background-4-4");
const ofd_table_backgroud_5_7_container = document.querySelector(".ofd-mcsacc-ctc-table-main-table-background-5-7");
if (ofd_table_backgroud_16_16_container) {
  for (var i = 0; i < 256; i++) {
    var ofd_table_backgroud_16_16_divs = document.createElement("div");
    ofd_table_backgroud_16_16_container.appendChild(ofd_table_backgroud_16_16_divs);
  }
}
if (ofd_table_backgroud_8_8_container) {
  for (var i = 0; i < 64; i++) {
    var ofd_table_backgroud_8_8_divs = document.createElement("div");
    ofd_table_backgroud_8_8_container.appendChild(ofd_table_backgroud_8_8_divs);
  }
}
if (ofd_table_backgroud_4_4_container) {
  for (var i = 0; i < 16; i++) {
    var ofd_table_backgroud_4_4_divs = document.createElement("div");
    ofd_table_backgroud_4_4_container.appendChild(ofd_table_backgroud_4_4_divs);
  }
}
if (ofd_table_backgroud_5_7_container) {
  for (var i = 0; i < 35; i++) {
    var ofd_table_backgroud_5_7_divs = document.createElement("div");
    ofd_table_backgroud_5_7_container.appendChild(ofd_table_backgroud_5_7_divs);
  }
}
