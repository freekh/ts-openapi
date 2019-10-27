"use strict";
exports.__esModule = true;
var OperationType_1 = require("./OperationType");
var ref_test_1 = require("../../ref.test");
var ref_1 = require("../../ref");
var root = new ref_1.RefRoot(ref_test_1.userComponents);
test('convert undefined', function () {
    OperationType_1.convertRequestBody(root)();
});
test('convert RequestBody', function () {
    var example = {
        'description': 'user to add to the system',
        'content': {
            'application/json': {
                'schema': {
                    '$ref': '#/components/schemas/User'
                },
                'examples': {
                    'user': {
                        'summary': 'User Example',
                        'externalValue': 'http://foo.bar/examples/user-example.json'
                    }
                }
            },
            'application/xml': {
                'schema': {
                    '$ref': '#/components/schemas/User'
                },
                'examples': {
                    'user': {
                        'summary': 'User example in XML',
                        'externalValue': 'http://foo.bar/examples/user-example.xml'
                    }
                }
            },
            'text/plain': {
                'examples': {
                    'user': {
                        'summary': 'User example in Plain text',
                        'externalValue': 'http://foo.bar/examples/user-example.txt'
                    }
                }
            },
            '*/*': {
                'examples': {
                    'user': {
                        'summary': 'User example in other format',
                        'externalValue': 'http://foo.bar/examples/user-example.whatever'
                    }
                }
            }
        }
    };
    OperationType_1.convertRequestBody(root)(example);
});
