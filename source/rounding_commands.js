function openFullPageFromGrid(selectedItems)
{
    let selectedItem = selectedItems[0];

    if (selectedItem) {     
        let pageInput = {
            pageType: "custom",
            name: "hsa_roundingsession_35171",
            entityName: selectedItem.TypeName,
            recordId: selectedItem.Id,
        };
        let navigationOptions = {
            target: 1
        };
        Xrm.Navigation.navigateTo(pageInput, navigationOptions)
            .then(
                function () {
                    // Handle success
                }
            ).catch(
                function (error) {
                    // Handle error
                }
            );
    }
}

function openFullPageFromItem(selectedItem)
{
// Inline Page
var pageInput = {
    pageType: "custom",
    name: "hsa_roundingsession_35171",
    entityName: "hsa_roundingdetail",
    recordId: selectedItem,
};
var navigationOptions = {
    target: 1
};
Xrm.Navigation.navigateTo(pageInput, navigationOptions)
    .then(
        function () {
            // Called when page opens
        }
    ).catch(
        function (error) {
            // Handle error
        }
    );

}

function openRequestFullPageFromGrid(selectedItems)
{
    let selectedItem = selectedItems[0];

    if (selectedItem) {     
        let pageInput = {
            pageType: "custom",
            name: "hsa_servicerequest_6e020",
            entityName: selectedItem.TypeName,
            recordId: selectedItem.Id,
        };
        let navigationOptions = {
            target: 1
        };
        Xrm.Navigation.navigateTo(pageInput, navigationOptions)
            .then(
                function () {
                    // Handle success
                }
            ).catch(
                function (error) {
                    // Handle error
                }
            );
    }
}

function openRequestFullPageFromItem(selectedItem)
{
// Inline Page
var pageInput = {
    pageType: "custom",
    name: "hsa_servicerequest_6e020",
    entityName: "hsa_roundingdetail",
    recordId: selectedItem,
};
var navigationOptions = {
    target: 1
};
Xrm.Navigation.navigateTo(pageInput, navigationOptions)
    .then(
        function () {
            // Called when page opens
        }
    ).catch(
        function (error) {
            // Handle error
        }
    );

}