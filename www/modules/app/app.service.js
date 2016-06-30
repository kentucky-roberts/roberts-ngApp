angular
    .module('app')
    .factory('dataservice', dataservice);

dataservice.$inject = ['$http', '$q'];
function dataservice($http, $q) {
    return {
        getData: getData
    };

    function getData() {
        return $http.get('api/data.json')
            .then(getDataComplete)
            .catch(getDataFailed);

        function getDataComplete(response) {
            // console.log(response.data);
            return response.data;
        }

        function getDataFailed(error) {
            console.log('XHR Failed for getData.' + error.data);
        }
    }
}