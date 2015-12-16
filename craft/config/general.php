<?php

return array(
    '*' => array(
        'omitScriptNameInUrls' => true,
        'maxUploadFileSize' => 335544322,
        'siteFullUrl' => 'http://findinggodeveryday.com'
    ),

    'dev' => array(
        'devMode' => true,
        'environmentVariables' => array(
            'env' => 'dev',
            'fileSystemPath' => '/vagrant/app/',
            'frontEndAssets' => '/src/',
            'siteName' => 'jan',
        )
    ),
    'localhost' => array(
        'devMode' => true,
        'environmentVariables' => array(
            'env' => 'dev',
            'fileSystemPath' => '/vagrant/app/',
            'frontEndAssets' => '/src/',
            'siteName' => 'jan',
        )
    ),

    '10.0.1.87' => array(
        'devMode' => true,
        'environmentVariables' => array(
            'env' => 'dev',
            'fileSystemPath' => '/vagrant/app/',
            'frontEndAssets' => '/src/',
            'siteName' => 'jan',
        )
    ),

    'yulu-zhang-macbook-pro.local' => array(
        'devMode' => true,
        'environmentVariables' => array(
            'env' => 'dev',
            'fileSystemPath' => '/vagrant/app/',
            'frontEndAssets' => '/src/',
            'siteName' => 'jan',
        )
    ),

    'janet.70kft.com' => array(
        'devMode' => true,
        'environmentVariables' => array(
            'env' => 'dev',
            'siteUrl'        => '/',
            'fileSystemPath' => '/var/www/vhosts/stratospherecreative.com/subdomains/janet/public/',
            'frontEndAssets' => '/src/',
            'siteName' => 'jan',
        )
    ),

    'lysm-zjrh.accessdomain.com' => array(
        'devMode' => true,
        'environmentVariables' => array(
            'env' => 'dev',
            'siteUrl'        => '/',
            'fileSystemPath' => '/var/www/findinggodeveryday.com/public/',
            'frontEndAssets' => '/src/',
            'siteName' => 'jan',
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
