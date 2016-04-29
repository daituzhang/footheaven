<?php

return array(
    '*' => array(
        'omitScriptNameInUrls' => true,
        'maxUploadFileSize' => 335544322,
        'siteFullUrl' => 'http://footheavenrelax.com'
    ),

    'localhost' => array(
        'devMode' => true,
        'environmentVariables' => array(
            'env' => 'dev',
            'fileSystemPath' => '/vagrant/app/',
            'frontEndAssets' => '/src/',
            'siteName' => 'Foot Heaven',
        )
    ),

    '198.12.149.81' => array(
        'devMode' => true,
        'environmentVariables' => array(
            'env' => 'dev',
            'fileSystemPath' => '/var/www/app',
            'frontEndAssets' => '/src/',
            'siteName' => 'Foot Heaven',
        )
    ),


    'footheavenrelax.com' => array(
        'devMode' => true,
        'environmentVariables' => array(
            'env' => 'dev',
            'fileSystemPath' => '/var/www/app',
            'frontEndAssets' => '/src/',
            'siteName' => 'Foot Heaven',
        )
    )



);
