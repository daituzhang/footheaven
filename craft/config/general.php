<?php

return array(
    '*' => array(
        'omitScriptNameInUrls' => true,
        'maxUploadFileSize' => 335544322,
        'siteFullUrl' => 'http://findinggodeveryday.com'
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

    'yulu-zhang-macbook-pro.local' => array(
        'devMode' => true,
        'environmentVariables' => array(
            'env' => 'dev',
            'fileSystemPath' => '/vagrant/app/',
            'frontEndAssets' => '/src/',
            'siteName' => 'Finding God Everyday',
        )
    ),

    'janet.70kft.com' => array(
        'devMode' => true,
        'environmentVariables' => array(
            'env' => 'dev',
            'siteUrl'        => '/',
            'fileSystemPath' => '/var/www/vhosts/stratospherecreative.com/subdomains/janet/app/',
            'frontEndAssets' => '/src/',
            'siteName' => 'Finding God Everyday',
        )
    ),

    'lysm-zjrh.accessdomain.com' => array(
        'devMode' => true,
        'environmentVariables' => array(
            'env' => 'dev',
            'siteUrl'        => '/',
            'fileSystemPath' => '/var/www/findinggodeveryday.com/public/',
            'frontEndAssets' => '/src/',
            'siteName' => 'Finding God Everyday',
        )
    ),
    // Treat *.vagrantshare.com the same as localhost
    'vagrantshare' => array(
        'devMode' => true,
        'environmentVariables' => array(
            'env' => 'dev',
            'fileSystemPath' => '/vagrant/public/',
            'frontEndAssets' => '/src/',
            'siteName' => 'My Personal Valet',
        )
    ),


);
