---
title: Release Guide
keywords: [Seata]
description: Release Guide.
---

# Release Guide

## 1. Introduction

#### 1.1 Apache Version Release Documentation

Refer to the following link to understand the ASF release process:

- [Apache Release Guide](http://www.apache.org/dev/release-publishing)
- [Apache Release Policy](http://www.apache.org/dev/release.html)
- [Maven Release Info](http://www.apache.org/dev/publishing-maven-artifacts.html)

#### 1.2 PGP Signature

Follow the Apache release guidelines to sign the release version, allowing users to verify whether the downloaded version has been tampered with.

Create a `pgp` key for version signing, using **\<your Apache ID>@apache.org** as the key USER-ID.

For more details, refer to the [Apache Releases Signing documentation](https://infra.apache.org/release-signing) and [Cryptography with OpenPGP](http://www.apache.org/dev/openpgp.html).

Here is a brief process for generating the key:http://www.apache.org/dev/openpgp.html)

Here is a brief process for generating the key:

- Generate a new `gpg` key using `gpg --full-gen-key`, setting the key length to 4096.

  Note: You can set the key to never expire or choose a specific expiration time based on your needs. However, you will need to update the public key after it expires in the [DEV KEYS file](https://dist.apache.org/repos/dist/dev/incubator/seata/KEYS) and the [RELEASE KEYS file](https://dist.apache.org/repos/dist/release/incubator/seata/KEYS).

- Upload the key to a public key server using `gpg --keyserver keys.openpgp.org --send-key <your key id>`.

  Note: If the access fails, you can upload the public key online via the [OpenPGP Keyserver (ubuntu.com)](https://keyserver.ubuntu.com/).

```
You can find the key ID using the command: gpg --list-signatures --keyid-format LONG
pub   rsa4096/XXXX 2024-09-19 [SC] [expires: 2027-09-19]
      F2D3A28A392129B927C7FB42XXXX
uid                   [ultimate] XXXX <XXXX@apache.org>
sig 3        XXXX 2024-09-19  [self-signed]
sub   rsa4096/XXXXXXX 2024-09-19 [E] [expires: 2027-09-19]
sig          XXXX 2024-09-19  [self-signed]
The key ID is XXXX.
```

- Export the public key to a text file using the command: `gpg --armor --output ./public-key.txt --export XXXX`.
- Append the generated key to the [DEV KEYS file](https://dist.apache.org/repos/dist/dev/incubator/seata/KEYS) and the [RELEASE KEYS file](https://dist.apache.org/repos/dist/release/incubator/seata/KEYS).
Note:

The DEV SVN repository can be added by the Release Manager, while the RELEASE SVN repository requires PMC permissions and can be assisted by the PMC to upload the KEY.

**Tips:** You need to set the default public key. If you have multiple public keys, please modify `~/.gnupg/gpg.conf`.

Reference example:

```
gpg (GnuPG) 2.2.4; Copyright (C) 2017 Free Software Foundation, Inc.
This is free software: you are free to change and redistribute it.
There is NO WARRANTY, to the extent permitted by law.

Please select what kind of key you want:
  (1) RSA and RSA (default)
  (2) DSA and Elgamal
  (3) DSA (sign only)
  (4) RSA (sign only)
Your selection? 1
RSA keys may be between 1024 and 4096 bits long.
What keysize do you want? (2048) 4096
Requested keysize is 4096 bits
Please specify how long the key should be valid.
        0 = key does not expire
     <n>  = key expires in n days
     <n>w = key expires in n weeks
     <n>m = key expires in n months
     <n>y = key expires in n years
Key is valid for? (0)
Key does not expire at all
Is this correct? (y/N) y

GnuPG needs to construct a user ID to identify your key.

Real name: (Set username) (use Apache ID)

Email address: (Set email address) (use Apache email)

Comment: (Fill in comment)

You selected this USER-ID:

"Username (comment) <email address>"

Change (N)ame, (C)omment, (E)mail or (O)kay/(Q)uit? O

You need a Passphrase to protect your secret key. (Set password)

```

Convert the generated public key and private key to ASCII format:

```
gpg --armor --output ./public-key.txt --export XXXX
gpg --armor --output ./private-key.txt --export-secret-keys XXXX

```

View the key list:

```
[root@localhost ~]# gpg --list-signatures --keyid-format LONG
[keyboxd]
---------
pub   rsa4096/XXXX 2024-09-19 [SC] [有效至：2027-09-19]
      F2D3A28A392129B927C7FB42XXXX
uid                   [ 绝对 ] XXXX <XXXX@apache.org>
sig 3        XXXX 2024-09-19  [自签名]
sub   rsa4096/XXXXXXX 2024-09-19 [E] [有效至：2027-09-19]
sig          XXXX 2024-09-19  [自签名]

```

Upload the public key to the key server

```
[root@localhost gpgtest]# gpg --keyserver keys.openpgp.org --send-key XXXX
gpg: sending key XXXX to hkp server keys.openpgp.org

```

#### 1.3 POM Configuration

Configure the POM file to deploy the version to the ASF Nexus repository.

① Add Apache POM inheritance for default settings.

```
<parent>
    <groupId>org.apache</groupId>
    <artifactId>apache</artifactId>
    <version>XX</version>
</parent>

```

② Add key information to the Maven configuration file `settings.xml`.

```
<settings>
    <profiles>
        <profile>
            <id>signed_release</id>
            <properties>
                <mavenExecutorId>forked-path</mavenExecutorId>
                <gpg.keyname>yourKeyName</gpg.keyname>
          <deploy.url>https://dist.apache.org/repos/dist/dev/incubator/seata/</deploy.url>
            </properties>
        </profile>
    </profiles>
    <servers>
        <!-- To publish a snapshot of some part of Maven -->
        <server>
            <id>apache.snapshots.https</id>
            <username>yourApacheID</username>
            <!-- Use the password encryption by maven -->
            <password>yourApachePassword</password>
        </server>
        <!-- To stage a release of some part of Maven -->
        <server>
            <id>apache.releases.https</id>
            <username>yourApacheID</username>
            <password>yourApachePassword</password>
        </server>
        <server>
            <id>gpg.passphrase</id>
            <passphrase>yourKeyPassword</passphrase>
        </server>
    </servers>
</settings>

```

**Tips:** It is recommended to use [Maven's password encryption capabilities](http://maven.apache.org/guides/mini/guide-encryption.html) to encrypt `gpg.passphrase`.

#### 1.5 Release Notes

Build the corresponding version's Release Notes from the [changelog](https://github.com/apache/incubator-seata/blob/2.x/changes/zh-cn/2.x.md).

## 2. Release Process

### 1. Prepare Branch

Create a new branch from the main branch as the release branch. For example, if you are going to release version `${release_version}`, create a new branch `${release_version}` from the development branch. All modifications and tagging related to `${release_version}` Release Candidates will be done in the `${release_version}` branch, ensuring that all GitHub Actions CI checks pass. After the release is completed, merge this branch back into the main branch.

Example: If the Java SDK needs to release version `2.2.0`, create a new branch `2.2.0` from the `2.x` branch, and commit changes in this branch to replace the Snapshot version number with `2.2.0`.

### 2. Pre-release Binary Package

#### 2.1 SDK Preparation for Release

Prepare the release according to the instructions in [publishing maven artifacts](https://infra.apache.org/publishing-maven-artifacts.html) [4].

```
mvn clean deploy -Prelease -DskipTests -e -B -Dorg.slf4j.simpleLogger.log.org.apache.maven.cli.transfer.Slf4jMavenTransferListener=warn
```

At this point, the Seata SDK is published to the [staging repository](https://repository.apache.org/#stagingRepositories) (you need to log in with your Apache account credentials). Find the released version, `${STAGING.RELEASE}`, and click Close.

Note: If closing fails, it may be because the public key corresponding to the signing key cannot be retrieved from [keys.openpgp.org](http://keys.openpgp.org/). Please check yourself using the [OpenPGP Keyserver (ubuntu.com)](https://keyserver.ubuntu.com/).

#### 2.2 Submit Source & Binary to SVN Repository

##### 2.2.1 Install SVN

Download and install from [Download Apache Subversion Sources](https://subversion.apache.org/download.cgi#recommended-release)

Alternatively, you can quickly install it using `brew install subversion`.

##### 2.2.2 Compile seata-server and seata-namingserver

Run the following command:

```
mvn -Prelease-seata -Dmaven.test.skip=true -Dskip.npm=true -T4C -Dpmd.skip=true clean install -U
```

##### 2.2.3 Sign the Source and Binary

For the Source, it is recommended to download the zip package directly from the corresponding version branch on GitHub, such as 2.2.0, to avoid polluting the Source package content in your local environment. Then rename it to `apache-seata-x.x.x-incubating-src.zip`.

Run the following command to generate a SHA-512 checksum:

```
shasum -b -a 512 apache-seata-x.x.x-incubating-src.zip >> apache-seata-x.x.x-incubating-src.zip.sha512
```

Sign the Binary:

```
gpg --armor --output apache-seata-x.x.x-incubating-bin.zip.asc apache-seata-x.x.x-incubating-bin.zip
```

For the Binary, generate a SHA-512 checksum:

```
shasum -b -a 512 apache-seata-x.x.x-incubating-bin.tar.gz >> apache-seata-x.x.x-incubating-bin.tar.gz.sha512
```

Sign the Binary:

```
gpg --armor --output apache-seata-x.x.x-incubating-bin.tar.gz.asc apache-seata-x.x.x-incubating-bin.tar.gz
```

Verify the SHA-512 checksum:

```
shasum -c apache-seata-x.x.x-incubating-bin.tar.gz.sha512
```

Verify the signature:

```
gpg --verify apache-seata-x.x.x-incubating-src.zip.asc apache-seata-x.x.x-incubating-src.zip
```

##### 2.2.4 Check Out SVN Locally, Create Release Version Path, and Move Signature Files, Source, and Binary into It

Check out the SVN directory:

```
svn co --depth=empty https://dist.apache.org/repos/dist/dev/incubator/seata/
```

Create the release version path and move the files into it:

```
cd seata
mkdir incubator-seata/x.x.x-RCn/
mv ../x.x.x incubator-seata/x.x.x-RCn/
```

After executing the above commands, the structure should look approximately like this:

```
-rw-r--r--@ 1 fe-work  staff   180M  9 20 10:16 apache-seata-2.2.0-incubating-bin.tar.gz
-rw-r--r--@ 1 fe-work  staff   180M  9 20 10:16 apache-seata-2.2.0-incubating-bin.tar.gz.asc
-rw-r--r--@ 1 fe-work  staff   187B  9 20 10:16 apache-seata-2.2.0-incubating-bin.tar.gz.sha512
-rw-r--r--@ 1 fe-work  staff   6.7M  9 20 10:16 apache-seata-2.2.0-incubating-src.zip
-rw-r--r--@ 1 fe-work  staff   6.7M  9 20 10:16 apache-seata-2.2.0-incubating-src.zip.asc
-rw-r--r--  1 fe-work  staff   300B  9 20 10:16 apache-seata-2.2.0-incubating-src.zip.sha512
```

The KEYS file in the parent `seata` directory needs to ensure that the public key generated in the first step is appended.

Run the following commands:

```
svn add x.x.x
svn commit -m "submit x.x.x version"
```

If you updated the KEYS file, you need to run `svn update KEYS` before committing.

After executing the commit, you will be prompted to enter your Apache LDAP username and password. Enter them to successfully submit the changes.

```
➜  seata svn commit -m 'submit 2.2.0 version'
Adding       2.2.0
Adding (binary) 2.2.0/apache-seata-2.2.0-incubating-bin.tar.gz
Adding (binary) 2.2.0/apache-seata-2.2.0-incubating-bin.tar.gz.asc
Adding       2.2.0/apache-seata-2.2.0-incubating-bin.tar.gz.sha512
Adding (binary) 2.2.0/apache-seata-2.2.0-incubating-src.zip
Adding (binary) 2.2.0/apache-seata-2.2.0-incubating-src.zip.asc
Adding       2.2.0/apache-seata-2.2.0-incubating-src.zip.sha512
Transmitting file data...done
Committing transaction...
Committed revision 71769.
```

#### 2.3 Creating Tag and Release Note

##### 2.3.1 Creating a Tag

Execute the following command in the x.x.x branch:

```
Copy Codegit tag vx.x.x -m 'release: release for x.x.x'
```

Then push the tag to the upstream (seata repository):

```
Copy Codegit push upstream vx.x.x
```

##### 2.3.2 Creating a Release Note

Create a release note using the following link: [New release · apache/incubator-seata (github.com)](https://github.com/apache/incubator-seata/releases/new) and set "Choose a tag" to the corresponding tag.

Set it as "Set as a pre-release." After the overall vote passes, change it to "Set as the latest release."

# 3. Voting Phase

## 3.1 Internal Community Voting

**Voting lasts at least 72 hours and requires 3 +1 binding votes.**

Send to:

```
dev@seata.apache.org
```

Title:

```
[VOTE] Release Apache Seata (Incubating) x.x.x-RCN (RoundN)
```

In this context, "N" in RC N and Round N represents the number of times the voting has occurred for that version.

```
Hi Seata Community,

This is a call for vote to release Apache Seata(incubating) v2.2.0-rc1.

The release candidates:
https://dist.apache.org/repos/dist/dev/incubator/seata/x.x.x/

The staging repo:
https://repository.apache.org/content/repositories/${STAGING.RELEASE}/

Git tag for the release:
https://github.com/apache/incubator-seata/releases/tag/vx.x.x

Hash for the release tag:
lasr commit id

Release Notes:
https://github.com/apache/incubator-seata/releases/tag/vx.x.x

The artifacts have been signed with Key [ key-id ], corresponding
to
[ XXXX@apache.org ]
which can be found in the keys file:
https://downloads.apache.org/incubator/seata/KEYS

Build Environment: JDK 8+, Apache Maven 3.6.0+.
/mvnw clean package -DskipTests=true

CI Test Workflow:
last commit ci:
https://github.com/apache/incubator-seata/actions/runs/10938949607/job/30411922716
https://github.com/apache/incubator-seata/actions/runs/10938949623/job/30410204492
https://github.com/apache/incubator-seata/actions/runs/10938949605/job/30411747821

The vote will be open for at least 72 hours.

Please vote accordingly:

[ ] +1 approve
[ ] +0 no opinion
[ ] -1 disapprove with the reason

Checklist for reference:

[ ] Download links are valid.
[ ] Checksums and signatures.
[ ] LICENSE/NOTICE files exist
[ ] No unexpected binary files
[ ] All source files have ASF headers
[ ] Can compile from source

To learn more about Apache Seata , please see https://seata.apache.org/

```

### 3.1.2 Completing the Vote

Send the release vote approval via email.

```
Hi Community,


The vote to release Apache Seata (Incubating) vx.x.x-RCN has passed
with 3 +1 binding votes, and no +0 or -1 votes.

3 (+1 binding)

- XXX

- XXX

- XXX

no further 0 or -1 votes.


The vote thread:
https://lists.apache.org/thread/rwco6lms9qo10whjj8gg1dr8j7drl2gf

Thank you for reviewing and voting for our release candidate.

We will soon launch the second stage of voting.
```



#### 3.2.1 Voting in the Incubator

Similar to community voting, but it is necessary to include the relevant thread links from the community vote to demonstrate that consensus has been reached within the community.

Send an email to `general@incubator.apache.org`

Subject:

`[VOTE] Release Apache Seata (Incubating) x.x.x-RCN`

The vote will last for at least 72 hours and must receive 3 +1 binding votes.

```
Hello everyone,

This is a call for vote to release Apache Seata(incubating)

The Apache Seata community has voted and approved the release of Apache
Seata(incubating) v2.2.0. We now kindly request the IPMC members
review and vote for this release.

The vote thread:
https://lists.apache.org/thread/rwco6lms9qo10whjj8gg1dr8j7drl2gf

Vote Result:
https://lists.apache.org/thread/ybo9c5hrx2h2glg2bdgs3t22xg734y7r

The release candidates:
https://dist.apache.org/repos/dist/dev/incubator/seata/x.x.x/

The staging repo:
https://repository.apache.org/content/repositories/${STAGING.RELEASE}/

Git tag for the release:
https://github.com/apache/incubator-seata/releases/tag/vx.x.x

Hash for the release tag:
last commit id

Release Notes:
https://github.com/apache/incubator-seata/releases/tag/vx.x.x

The artifacts have been signed with Key [ key-id ], corresponding
to
[ XXXX@apache.org ]
which can be found in the keys file:
https://downloads.apache.org/incubator/seata/KEYS

Build Environment: JDK 8+, Apache Maven 3.6.0+.
/mvnw clean package -DskipTests=true

CI Test Workflow:
last commit ci:
https://github.com/apache/incubator-seata/actions/runs/10938949607/job/30411922716
https://github.com/apache/incubator-seata/actions/runs/10938949623/job/30410204492
https://github.com/apache/incubator-seata/actions/runs/10938949605/job/30411747821

The vote will be open for at least 72 hours.

Please vote accordingly:

[ ] +1 approve
[ ] +0 no opinion
[ ] -1 disapprove with the reason

Checklist for reference:

[ ] Download links are valid.
[ ] Checksums and signatures.
[ ] LICENSE/NOTICE files exist
[ ] No unexpected binary files
[ ] All source files have ASF headers
[ ] Can compile from source

To learn more about Apache Seata , please see https://seata.apache.org/
```

### 3.2.2 Announcement of Incubator Vote Results

After 72 hours, if there are at least 3 votes in favor and no opposing votes, send the results following the email template below.

Send an email to `general@incubator.apache.org`

Subject: `[RESULT][VOTE] Release Apache Seata (Incubating) x.x.x-RCN`

```
Hi Incubator PMC,

The vote to release Apache Seata(incubating) X.X.X-RCN has passed with
3 +1 binding and 1 +1 non-binding votes, no +0 or -1 votes.

Binding votes：

- XXX
- XXX
- XXX

Non-Binding votes:

- XXX

Vote thread:
https://lists.apache.org/thread/o7vwdvtolclcv1y4j4ozshj923ppwlnl

Thanks for reviewing and voting for our release candidate. We will
proceed with publishing the approved artifacts and sending out the
announcement soon.

```



# 4. Completing the Release

### 4.1 Release Version

1. From the Apache Nexus repository, select the previously closed orgapache-seata-XXX and click the Release icon to publish.

2. Move the signature files, src, and bin from the dev directory to the release path using the following command:

   ```
   svn mv https://dist.apache.org/repos/dist/dev/incubator/seata/incubator-seata/x.x.x-RCN https://dist.apache.org/repos/dist/release/incubator/seata/x.x.x -m "Release Seata X.X.X"
   ```

3. Set the previous release note as "Set as the latest release" and submit it.

4. Update the documentation for x.x.x on the Seata official website, including the download links for the corresponding binary and source.

### 4.2 Version Announcement

Send an email to` general@incubator.apache.org`

Subject: `[ANNOUNCE] Apache Seata (Incubating) vx.x.x available`

```
Hi All,

The Apache Seata(Incubating) vx.x.x has been released!

Apache Seata is an easy-to-use, high-performance, open source distributed transaction solution.

Download Links: https://seata.apache.org/download/seata-server/

Release Notes:
https://github.com/apache/incubator-seata/releases/tag/vx.x.x/

Website: https://seata.apache.org/

Resources:
- Issue: https://github.com/apache/incubator-seata/issues
- Mailing list: dev@seata.apache.org
```
