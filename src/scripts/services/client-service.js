'use strict';

angular.module('rest')
    .factory('ClientService', ['$resource', 'ServiceUtils',
        function ($resource, ServiceUtils) {
            return $resource(
                ServiceUtils.constructServiceUrl('clients', ':id'),
                {id: '@_id'},
                {}
            );
        }
    ]);
