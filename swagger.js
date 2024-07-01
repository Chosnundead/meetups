let openapi = {
    openapi: "3.0.1",
    components: {
        securitySchemes: {
            cookieAuth: {
                type: "apiKey",
                in: "cookie",
                name: "accessToken",
            },
        },
    },
    security: [
        {
            cookieAuth: [],
        },
    ],
    paths: {
        "/meetups": {
            get: {
                tags: ["Meetups"],
                summary: "Get all meetups",
                operationId: "getAllMeetup",
                responses: {
                    200: {
                        description: "List of meetups",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "array",
                                    items: {
                                        type: "object",
                                        properties: {
                                            data: {
                                                type: "array",
                                                items: {
                                                    type: "object",
                                                    properties: {
                                                        meetup_id: {
                                                            type: "number",
                                                        },
                                                        title: {
                                                            type: "string",
                                                        },
                                                        description: {
                                                            type: "string",
                                                        },
                                                        tags: {
                                                            type: "array",
                                                            items: {
                                                                type: "string",
                                                            },
                                                        },
                                                        event_time: {
                                                            type: "string",
                                                            format: "date-time",
                                                        },
                                                        location: {
                                                            type: "string",
                                                        },
                                                        author_id: {
                                                            type: "number",
                                                        },
                                                        subscribers: {
                                                            type: "array",
                                                            items: {
                                                                type: "number",
                                                            },
                                                        },
                                                    },
                                                },
                                            },
                                        },
                                    },
                                },
                                example: [
                                    {
                                        data: [
                                            {
                                                meetup_id: 3,
                                                title: "2121",
                                                description:
                                                    "This is a description of an example meetup",
                                                tags: ["test", "second"],
                                                event_time:
                                                    "2022-01-01T12:00:00.000Z",
                                                location: "Example street, 123",
                                                author_id: 2,
                                                subscribers: [],
                                            },
                                            {
                                                meetup_id: 4,
                                                title: "1",
                                                description:
                                                    "This is a description of an example meetup",
                                                tags: ["test", "second"],
                                                event_time:
                                                    "2022-01-01T12:00:00.000Z",
                                                location: "Example street, 123",
                                                author_id: 2,
                                                subscribers: [],
                                            },
                                            {
                                                meetup_id: 5,
                                                title: "1",
                                                description:
                                                    "This is a description of an example meetup",
                                                tags: ["test", "second"],
                                                event_time:
                                                    "2022-01-01T12:00:00.000Z",
                                                location: "Example street, 123",
                                                author_id: 2,
                                                subscribers: [],
                                            },
                                            {
                                                meetup_id: 6,
                                                title: "1",
                                                description:
                                                    "This is a description of an example meetup",
                                                tags: ["test", "second"],
                                                event_time:
                                                    "2022-01-01T12:00:00.000Z",
                                                location: "Example street, 123",
                                                author_id: 2,
                                                subscribers: [],
                                            },
                                            {
                                                meetup_id: 7,
                                                title: "1",
                                                description:
                                                    "This is a description of an example meetup",
                                                tags: ["test", "second"],
                                                event_time:
                                                    "2022-01-01T12:00:00.000Z",
                                                location: "Example street, 123",
                                                author_id: 2,
                                                subscribers: [],
                                            },
                                            {
                                                meetup_id: 8,
                                                title: "1",
                                                description:
                                                    "This is a description of an example meetup",
                                                tags: ["test", "second"],
                                                event_time:
                                                    "2022-01-01T12:00:00.000Z",
                                                location: "Example street, 123",
                                                author_id: 2,
                                                subscribers: [],
                                            },
                                            {
                                                meetup_id: 12,
                                                title: "1",
                                                description:
                                                    "This is a description of an example meetup",
                                                tags: ["test", "second"],
                                                event_time:
                                                    "2022-01-01T12:00:00.000Z",
                                                location: "Example street, 123",
                                                author_id: 2,
                                                subscribers: [],
                                            },
                                            {
                                                meetup_id: 13,
                                                title: "1",
                                                description:
                                                    "This is a description of an example meetup",
                                                tags: ["test", "second"],
                                                event_time:
                                                    "2022-01-01T12:00:00.000Z",
                                                location: "Example street, 123",
                                                author_id: 2,
                                                subscribers: [],
                                            },
                                            {
                                                meetup_id: 14,
                                                title: "1",
                                                description:
                                                    "This is a description of an example meetup",
                                                tags: ["test", "second"],
                                                event_time:
                                                    "2022-01-01T12:00:00.000Z",
                                                location: "Example street, 123",
                                                author_id: 2,
                                                subscribers: [],
                                            },
                                            {
                                                meetup_id: 15,
                                                title: "1",
                                                description:
                                                    "This is a description of an example meetup",
                                                tags: ["test", "second"],
                                                event_time:
                                                    "2022-01-01T12:00:00.000Z",
                                                location: "Example street, 123",
                                                author_id: 2,
                                                subscribers: [],
                                            },
                                        ],
                                        pagination: {
                                            page: 1,
                                            totalPages: 5,
                                            totalItems: 46,
                                        },
                                    },
                                ],
                            },
                        },
                    },
                },
            },
            post: {
                tags: ["Meetups"],
                summary: "Create a new meetup",
                operationId: "createMeetup",
                requestBody: {
                    required: true,
                    content: {
                        "application/json": {
                            schema: {
                                type: "object",
                                properties: {
                                    title: { type: "string" },
                                    description: { type: "string" },
                                    tags: {
                                        type: "array",
                                        items: { type: "string" },
                                    },
                                    event_time: {
                                        type: "string",
                                        format: "date-time",
                                    },
                                    location: { type: "string" },
                                    author_id: { type: "number" },
                                },
                            },
                            example: {
                                title: "!1!",
                                description:
                                    "This is a description of an example meetup",
                                tags: ["test", "second"],
                                event_time: "2022-01-01T12:00:00Z",
                                location: "Example street, 123",
                                author_id: 1,
                            },
                        },
                    },
                },
                responses: {
                    201: {
                        description: "Meetup created successfully",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        message: { type: "string" },
                                    },
                                },
                                example: {
                                    message: "Meetup created successfully",
                                },
                            },
                        },
                    },
                    400: {
                        description: "Invalid input, object invalid",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        message: { type: "string" },
                                    },
                                },
                                example: {
                                    message: "Invalid input",
                                },
                            },
                        },
                    },
                },
            },
        },
        "/meetups/{id}": {
            get: {
                tags: ["Meetups"],
                summary: "Get a meetup by ID",
                operationId: "getMeetupById",
                parameters: [
                    {
                        name: "id",
                        in: "path",
                        required: true,
                        schema: {
                            type: "string",
                        },
                        description: "ID of the meetup to get",
                    },
                ],
                responses: {
                    200: {
                        description: "Meetup found",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        meetup_id: { type: "number" },
                                        title: { type: "string" },
                                        description: { type: "string" },
                                        tags: {
                                            type: "array",
                                            items: { type: "string" },
                                        },
                                        event_time: {
                                            type: "string",
                                            format: "date-time",
                                        },
                                        location: { type: "string" },
                                        author_id: { type: "number" },
                                        subscribers: {
                                            type: "array",
                                            items: { type: "number" },
                                        },
                                    },
                                },
                                example: {
                                    meetup_id: 25,
                                    title: "!2!",
                                    description:
                                        "This is a description of an example meetup",
                                    tags: ["test", "second"],
                                    event_time: "2022-01-01T12:00:00.000Z",
                                    location: "Example street, 123",
                                    author_id: 2,
                                    subscribers: [],
                                },
                            },
                        },
                    },
                    404: {
                        description: "Meetup not found",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        message: { type: "string" },
                                    },
                                },
                                example: {
                                    message: "Meetup not found",
                                },
                            },
                        },
                    },
                },
            },
            put: {
                tags: ["Meetups"],
                summary: "Update a meetup by ID",
                operationId: "updateMeetupById",
                parameters: [
                    {
                        name: "id",
                        in: "path",
                        required: true,
                        schema: {
                            type: "string",
                        },
                        description: "ID of the meetup to update",
                    },
                ],
                requestBody: {
                    required: true,
                    content: {
                        "application/json": {
                            schema: {
                                type: "object",
                                properties: {
                                    title: { type: "string" },
                                    description: { type: "string" },
                                    tags: {
                                        type: "array",
                                        items: { type: "string" },
                                    },
                                    event_time: {
                                        type: "string",
                                        format: "date-time",
                                    },
                                    location: { type: "string" },
                                },
                            },
                            example: {
                                title: "tefffff32ggg2222232fst",
                                description: "21",
                                tags: ["testttt", "test"],
                                event_time: "2024-11-05T22:00:00.000Z",
                                location: "test",
                            },
                        },
                    },
                },
                responses: {
                    200: {
                        description: "Meetup updated successfully",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        message: { type: "string" },
                                    },
                                },
                                example: {
                                    message: "Meetup updated successfully",
                                },
                            },
                        },
                    },
                    400: {
                        description: "Invalid input, object invalid",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        message: { type: "string" },
                                    },
                                },
                                example: {
                                    message: "Invalid input",
                                },
                            },
                        },
                    },
                    404: {
                        description: "Meetup not found",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        message: { type: "string" },
                                    },
                                },
                                example: {
                                    message: "Meetup not found",
                                },
                            },
                        },
                    },
                },
            },
            delete: {
                tags: ["Meetups"],
                summary: "Delete a meetup by ID",
                operationId: "deleteMeetupById",
                parameters: [
                    {
                        name: "id",
                        in: "path",
                        required: true,
                        schema: {
                            type: "string",
                        },
                        description: "ID of the meetup to delete",
                    },
                ],
                responses: {
                    204: {
                        description: "Meetup deleted successfully",
                    },
                    404: {
                        description: "Meetup not found",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        message: { type: "string" },
                                    },
                                },
                                example: {
                                    message: "Meetup not found",
                                },
                            },
                        },
                    },
                },
            },
        },
    },
};

module.exports = openapi;
