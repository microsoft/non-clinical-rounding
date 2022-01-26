# Non Clinical Rounding

## Features

- Rounding List (full Rounding List, rooms with alerts, rooms with low sentiment)
- Clickable rounding map with sentiment and alert notifications
- Interactive survey for selected room
- View survey history
- Cross-platform, responsive application

## Dependencies

- Dataverse with Healthcare data model
  - Patient (Contact)
  - Location
  - Encounter

## Deployment

1. Deploy managed solution to a Dataverse environment
    1. Publish the *Non-Clinical Rounding* and *Rounding History* Power Apps
1. Assign Non Clinical Rounding Administration security role
1. Deploy sample data (or create your own)
1. Share app with users and assign security roles

## Major components

- Model Driven Power App: Non-Clinical Rounding
- Table: Rounding Detail
- Table: Rounding Session
- Security Role: Non Clinical Rounding User
- Security Role: Non Clinical Rounding Administration

## Design Decisions

- Use of FHIR concept of Encounter to track experience across multiple locations 
  - https://www.hl7.org/fhir/encounter-definitions.html
- Use of FHIR concept of Encounter Locations to list and filter based on a status of Active
  - https://www.hl7.org/fhir/encounter-definitions.html#Encounter.location
  - This is used to show the list of beds (Locations), and allow the traversing of related information
  - A configured *Rounding Detail* table includes direct links to the the Patient and Location, based on the Encounter details.  Allows for use of Power Platform & Dataverse features for workflow and reporting, without modification to the FHIR data.

- Note: Sample room map uses Power Apps experimental feature to select and open room record

## Sample Data

This repository includes sample data that allows testing/modification without requiring a live FHIR integration.

1. Import the *RoundingDetail.csv* file found in the solutions folder of this repository
    1. Not sure how? Navigate to *Power Apps Maker Portal->Data->Rounding Detail->Data* then use the **Import from Excel** action
    1. Update the data map to relate the *Title* column from the .csv to the *Title* column in Dataverse

1. Optional: Update references for each *Rounding Detail* record to a related Patient, Encounter, and Location. Doing so will enable additional views/reporting summarized for an Encounter (regardless of Location), summarized for a Location (regardless of Patient), etc.

If you choose to create your own sample data, the Rounding Map (canvas Page) will need to be updated to reflect the room names/numbers/map location in order to behave as expected.

## Solution History

### NonClinicalRounding 1.0.5

Addressed bug for the Non-Clinical Rounding User security role to create Rounding Sessions.

### NonClinicalRounding 1.0.4

Re-added form-embedded canvas Power App.

### NonClinicalRounding 1.0.3

Addressed some visual defects.

- Canvas components - adjusting width for better mobile phone experience
- Rounding Detail form - Added Encounter and Patient lookup fields to Details tab for reference (read-only)

### NonClinicalRounding 1.0.2

First deployable package.

- Added user security role

## Contributing

This project welcomes contributions and suggestions.  Most contributions require you to agree to a
Contributor License Agreement (CLA) declaring that you have the right to, and actually do, grant us
the rights to use your contribution. For details, visit https://cla.opensource.microsoft.com.

When you submit a pull request, a CLA bot will automatically determine whether you need to provide
a CLA and decorate the PR appropriately (e.g., status check, comment). Simply follow the instructions
provided by the bot. You will only need to do this once across all repos using our CLA.

This project has adopted the [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/).
For more information see the [Code of Conduct FAQ](https://opensource.microsoft.com/codeofconduct/faq/) or
contact [opencode@microsoft.com](mailto:opencode@microsoft.com) with any additional questions or comments.

## Trademarks

This project may contain trademarks or logos for projects, products, or services. Authorized use of Microsoft 
trademarks or logos is subject to and must follow 
[Microsoft's Trademark & Brand Guidelines](https://www.microsoft.com/en-us/legal/intellectualproperty/trademarks/usage/general).
Use of Microsoft trademarks or logos in modified versions of this project must not cause confusion or imply Microsoft sponsorship.
Any use of third-party trademarks or logos are subject to those third-party's policies.
