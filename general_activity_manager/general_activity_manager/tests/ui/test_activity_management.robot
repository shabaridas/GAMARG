*** Settings ***
Documentation     Test suite for Activity Management functionality.
Resource          frappe/tests/ui/resources/common.robot
Suite Setup       Setup Test
Suite Teardown    Teardown Test

*** Test Cases ***
Create New Activity Management Record
    [Documentation]    Test creating a new activity record as Administrator.
    Login as Administrator
    Go to List    Activity Management
    Click Primary Action    New
    
    # Fill Activity Form
    Set Field Values    participant_type=Student
    Set Field Values    participant=STUD-001    # Assuming this student exists
    Set Field Values    event_name=Robot Test Hackathon
    Set Field Values    category=Hackathon
    Set Field Values    event_date=2026-03-24
    
    Click Primary Action    Save
    Wait For Saved
    
    # Verify in List
    Go to List    Activity Management
    Page Should Contain    Robot Test Hackathon
