export class AccommodationData {
    createDb() {
        let accommodations = [
            {
                "id": 1,
                "type": 1,
                "squareMeters": 16,
                "title": "CosyRoom 1",
                "address": "Stettiner Str. 3, 48465 Schüttorf",
                "match": 50,
                "price": 450,
                "securityDeposit": 800,
                "availableFrom": "2009-02-15T00:00:00Z",
                "introText": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                "socializingText": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                "miscellaneousText": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                "pictures": [
                    {
                        "id": 1,
                        "url": "img/zimmer1.jpg",
                        "thumbUrl": "img/zimmer1.jpg",
                        "label": "Das ist ein sehr netter Raum",
                        "width": 640,
                        "height": 480
                    },
                    {
                        "id": 2,
                        "url": "img/zimmer2.jpg",
                        "thumbUrl": "img/zimmer2.jpg",
                        "label": "Das ist ein sehr netter Raum",
                        "width": 640,
                        "height": 480
                    },
                    {
                        "id": 3,
                        "url": "img/zimmer3.jpg",
                        "thumbUrl": "img/zimmer3.jpg",
                        "label": "Das ist ein sehr netter Raum",
                        "width": 640,
                        "height": 480
                    }
                ],
                "roomMates": [
                    {
                        "id": 1,
                        "firstName": "Christoph",
                        "lastName": "Stach",
                        "age": 27,
                        "pictures": [
                            {
                                "id": 11,
                                "url": "img/user1.jpg",
                                "thumbUrl": "img/user1.jpg",
                                "label": "Das ist ein sehr netter Raum",
                                "width": 480,
                                "height": 480
                            }
                        ]
                    },
                    {
                        "id": 2,
                        "firstName": "Björn",
                        "lastName": "Gehrke",
                        "age": 26,
                        "pictures": [
                            {
                                "id": 11,
                                "url": "img/user2.jpg",
                                "thumbUrl": "img/user2.jpg",
                                "width": 480,
                                "height": 480
                            }
                        ]
                    },
                    {
                        "id": 3,
                        "firstName": "Alexander",
                        "lastName": "Quickert",
                        "age": 29,
                        "pictures": [
                            {
                                "id": 11,
                                "url": "img/user3.jpg",
                                "label": "",
                                "width": 480,
                                "height": 480
                            }
                        ]
                    }
                ]
            },
            {
                "id": 2,
                "type": 1,
                "squareMeters": 16,
                "match": 78,
                "availableFrom": "2009-02-15T00:00:00Z",
                "address": "Plönzeile 26, 12345 Berlin",
                "price": 410,
                "securityDeposit": 500,
                "title": "CosyRoom 2",
                "introText": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                "socializingText": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                "miscellaneousText": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                "pictures": [
                    {
                        "id": 2,
                        "url": "img/zimmer2.jpg",
                        "thumbUrl": "img/zimmer2.jpg",
                        "label": "Das ist ein sehr netter Raum",
                        "width": 640,
                        "height": 480
                    }
                ],
                "roomMates": [
                    {
                        "id": 2,
                        "firstName": "Björn",
                        "lastName": "Gehrke",
                        "pictures": [
                            {
                                "id": 11,
                                "url": "img/user2.jpg",
                                "thumbUrl": "img/user2.jpg",
                                "width": 480,
                                "age": 27,
                                "height": 480
                            }
                        ]
                    },
                    {
                        "id": 3,
                        "firstName": "Alexander",
                        "lastName": "Quickert",
                        "pictures": [
                            {
                                "id": 11,
                                "url": "img/user3.jpg",
                                "label": "",
                                "width": 480,
                                "age": 29,
                                "height": 480
                            }
                        ]
                    }
                ]
            },
            {
                "id": 3,
                "type": 1,
                "match": 80,
                "price": 320,
                "address": "Stettiner Str. 3, 48465 Schüttorf",
                "availableFrom": "2009-02-15T00:00:00Z",
                "squareMeters": 16,
                "securityDeposit": 1000,
                "title": "CosyRoom 3",
                "introText": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                "socializingText": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                "miscellaneousText": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                "pictures": [
                    {
                        "id": 3,
                        "url": "img/zimmer3.jpg",
                        "thumbUrl": "img/zimmer3.jpg",
                        "label": "Das ist ein sehr netter Raum",
                        "width": 640,
                        "height": 480
                    }
                ],
                "roomMates": [
                    {
                        "id": 1,
                        "firstName": "Christoph",
                        "lastName": "Stach",
                        "pictures": [
                            {
                                "id": 11,
                                "url": "img/user1.jpg",
                                "thumbUrl": "img/user1.jpg",
                                "label": "Das ist ein sehr netter Raum",
                                "width": 480,
                                "age": 27,
                                "height": 480
                            }
                        ]
                    },
                    {
                        "id": 2,
                        "firstName": "Björn",
                        "lastName": "Gehrke",
                        "pictures": [
                            {
                                "id": 11,
                                "url": "img/user2.jpg",
                                "thumbUrl": "img/user2.jpg",
                                "width": 480,
                                "age": 26,
                                "height": 480
                            }
                        ]
                    }
                ]
            }
        ];
        return {accommodations};
    }
}